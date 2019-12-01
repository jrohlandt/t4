<?php
namespace App\Helpers\CsvParser;

use App\Helpers\CsvParser\Exceptions\InvalidCsvFileException;
use App\Helpers\CsvParser\Exceptions\InvalidDateException;
use App\Helpers\CsvParser\Exceptions\InvalidValidationRule;
use Carbon\Carbon;

class CsvParser
{
    const IGNORE_COLUMN = 'ignore_column';

    private $availableValidationRules = [
        'required_or_skip',
        'required_or_fail',
        'email',
    ];

    private $configuration = [];

    public function __construct(array $configuration)
    {
        $this->configuration = $configuration;
    }

    public static function normalizeColumnName($columnName)
    {
        return strtolower(str_replace(' ', '_', trim($columnName)));
    }

    public static function normalizeColumnNames($columnNames): array
    {
        return array_map(function($c) { return self::normalizeColumnName($c); }, $columnNames);
    }

    public static function splitConfigString($string): array
    {
        $arr = explode('|', $string);
        return !empty($arr) ? self::normalizeColumnNames($arr) : $arr;
    }

    public function processColumnNames($columnNames)
    {
        $fields = [];
        $i = 0;
        foreach (self::normalizeColumnNames($columnNames) as $h)
        {
            $i++;
            if ($i > 20) break; // loop through 20 columns max.
            foreach ($this->configuration['columns'] as $k => $arr ) {
                if (is_string($arr)) {
                    if (self::normalizeColumnName($arr) === $h) {
                        $fields[] = $arr;
                        continue 2;
                    }
                } else {
                    if (self::normalizeColumnName($k) === $h) {
                        $fields[] = $k;
                        continue 2;
                    }
                    if (!empty($arr['variants'])) {
                        $variants = self::splitConfigString($arr['variants']);
                        foreach ($variants as $variant) {
                            if ($variant === $h) {
                                $fields[] = $k;
                                continue 3;
                            }
                        }
                    }
                }
            }
            $fields[] = self::IGNORE_COLUMN;
        }
        if (empty($fields))
            throw new InvalidCsvFileException("Invalid CSV file: No Column names found.");

        return $fields;
    }

    /**
     * Example output:
     * INPUT             |     OUTPUT
     * 1/3/18 10:00:00   |     3 Jan 2018 10:00:00 // this is valid US data format
     * 1/3/2018 10:00:00 |     3 Jan 2018 10:00:00 // this is also valid US date format
     * 1-3-18 10:00:00   |     Mar 18, 2001 10:00:00 // Not valid
     * 1-3-2018 10:00:00 |     Mar 1, 2018 10:00:00 // Not valid
     */
    public static function parseDate($date, $tz)
    {
        try {
//            $parsed = Carbon::parse($date)->toDateTimeString();
            $date = Carbon::createFromFormat('Y-m-d H:i:s', $date, $tz);
            $date->setTimezone('UTC');
            $parsed = $date->toDateTimeString();
        }
        catch(\Exception $e)
        {
            $message = "Incorrect Date Format ({$date}). The correct format is YYYY-MM-DD HH:mm:ss (E.g. 2019-11-27 12:18:23)";
            throw new InvalidDateException($message);
        }
        return $parsed;
    }

    /**
     * @param string $columnName
     * @return bool
     */
    private function columnHasCallback($columnName)
    {
        return !empty($this->configuration['columns'][$columnName]['callback']);
    }

    /**
     * @param string $columnName
     * @return callable
     */
    private function getColumnCallback($columnName)
    {
        return $this->configuration['columns'][$columnName]['callback'];
    }

    private function getColumnValidationRules($columnName): array
    {
        if (empty($this->configuration['columns'][$columnName]['rules'])) {
            return [];
        }
        $rules = $this->splitConfigString($this->configuration['columns'][$columnName]['rules']);
        return array_map(function($r) use ($columnName) {
            $rule = strtolower($r);
            if (!in_array($rule, $this->availableValidationRules)) {
                throw new InvalidValidationRule("Invalid validation rule {$rule} in column {$columnName}");
            }
            return $rule;
        }, $rules);
    }
    public static function convertEncoding($string, $to_encoding='UTF-8')
    {
        $encoding = mb_detect_encoding($string, 'UTF-8, ISO-8859-1', true);
        return ($encoding !== false && $encoding !== $to_encoding) ? mb_convert_encoding($string, $to_encoding, 'ISO-8859-1') : $string;
    }

    private function rowIsEmpty(array $row): bool
    {
        $isEmpty = true;
        foreach($row as $val) {
            if (!empty($val)) {
                $isEmpty = false;
            }
        }
        return $isEmpty;
    }

    public function parseCSVIntoArray($filePath, $offset, $limit)
    {
        ini_set("auto_detect_line_endings", true); // For files that use \r as line ending.
        $fileArray = file($filePath, FILE_SKIP_EMPTY_LINES);
        $fileArray = array_filter(array_map("trim", $fileArray), "strlen");
        // Get and remove header row from file and also remove potential utf-8 signature from the header row.
        // Some spreadsheet applications add a utf-8 signature to the start of the file that causes the csv parser to add an extra invalid column/header.
        $headerRow = str_getcsv(str_replace("\xEF\xBB\xBF", '', array_shift($fileArray)));
        $columnNames = $this->processColumnNames($headerRow);
        $rows = [];
        $lineNumber = 0;
        $fileArray = array_slice($fileArray, $offset, $limit);
        foreach ($fileArray as $line ) {
            $lineNumber++;
            $rows[] = str_getcsv($line);
        }

        $parsedRows = [];
        foreach ($rows as $row) {
            if ($this->rowIsEmpty($row)) continue;
            $parsedRow = [];
            for ($i=0; $i < count($columnNames); $i++) {
                $columnName = $columnNames[$i];
                if ($columnName === self::IGNORE_COLUMN) {
                    continue;
                }
                if ($validationRules = $this->getColumnValidationRules($columnName)) {
                    foreach($validationRules as $rule) {
                        if ($rule === 'required_or_skip') {
                            if (empty($row[$i])) {
                                continue 3;
                            }
                        }
                    }
                }
                $parsedRow[$columnName] = $row[$i];
                if ($this->columnHasCallback($columnName)) {
                    $callback = $this->getColumnCallback($columnName);
                    $parsedRow[$columnName] = $callback($row[$i]);
                }
            }
            $parsedRows[] = $parsedRow;
        }
        return $parsedRows;
    }
}
<?php

namespace Tests\Unit;

use App\Helpers\CsvParser\Exceptions\InvalidCsvFileException;
use App\Helpers\CsvParser\Exceptions\InvalidDateException;
use Tests\TestCase;
use App\Helpers\CsvParser\CsvParser;

class CSVParserTest extends TestCase
{
    private $csvParser;
    private $tz = 'Africa/Johannesburg';

    public function setUp(): void
    {
        parent::setUp();
        $configuration = [
            'columns' => [
                'email' => [
                    'variants' => 'email|emailAddress|email_address|email address',
                    'callback' => function($val) { return CSVParser::convertEncoding($val); },
                    'rules' => 'required_or_skip',
                ],
                'first_name' => [
                    'variants' => 'first_name|first name|firstname|firstName|fname',
                    'callback' => function($val) { return CSVParser::convertEncoding($val); },
                ],
                'last_name' => [
                    'variants' => 'last_name|last name|lastname|lastName|lname',
                    'callback' => function($val) { return CSVParser::convertEncoding($val); },
                ],
                'timestamp' => [
                    'variants' => 'timestamp|date',
                    'callback' => function($val) { return CSVParser::parseDate($val, $this->tz); },
                ],
            ]
        ];
        $this->csvParser = new CSVParser($configuration);
    }

    private function writeCsvFile($content)
    {
        $file = storage_path('csv_parser_testing_tmp/').'testCsv.csv';
        @unlink($file);
        file_put_contents($file, $content);
        return $file;
    }

    /**
     * create a csv file, parse it and then unlink the file.
     * @param string $contents
     * @param int $offset
     * @param int $limit
     * @return array
     */
    private function createAndParseCsvFile($contents, $offset, $limit)
    {
        $file = $this->writeCsvFile($contents);
        $parsed = $this->csvParser->parseCSVIntoArray($file, $offset, $limit);
        @unlink($file);
        return $parsed;
    }

    /** @test */
    public function can_parse_column_names()
    {
        $contents = 'Email Address,first_name,lastName,timestamp,Country
jane@example.com,jane,smith,11/24/2018,Other
joe@example.com,joe,smith,4/7/2019,United States
,,,,
,,,,
,,,,
,,,,
,,,,';
        $file = $this->writeCsvFile($contents);
        ini_set("auto_detect_line_endings", true); // For files that use \r as line ending.
        $csv = array_map("str_getcsv", file($file,FILE_SKIP_EMPTY_LINES));
        $headerRow = array_shift($csv);
        @unlink($file);
        $configuration = [
            'columns' => [
                'first_name',
                'email' => [
                    'variants' => 'email|emailAddress|email_address|email address',
                ],
                'last_name' => [
                    'variants' => 'last_name|last name|lastname|lastName|lname',
                ],
                'timestamp' => [
                    'variants' => 'timestamp|date',
                ],
                'country',
            ]
        ];
        $columnNames = (new CSVParser($configuration))->processColumnNames($headerRow);
        $expected = [
            'email', 'first_name', 'last_name', 'timestamp', 'country',
        ];
        $this->assertEquals($expected, $columnNames);
    }

    /** @test */
    public function will_not_parse_file_without_header_row()
    {
        $contents = 'johndoe@gmail.com,John,Doe,2017-12-01 12:44:23
joedoe@gmail.com,Joe,Doe,2017-12-01 12:44:23
';
        $this->expectException(InvalidCSVFileException::class);
        $this->createAndParseCsvFile($contents,0, 2);
    }

    /** @test */
    public function can_parse_valid_dates()
    {
        $dates = [
            ['original' => '2018-10-21 20:41:07', 'expected' => '2018-10-21 20:41:07'],
            ['original' => '2019-10-21', 'expected' => '2019-10-21 00:00:00'],
            ['original' => '2017-12-01 12:40:23', 'expected' => '2017-12-01 12:40:23'],
            ['original' => '7/03/2007', 'expected' => '2007-07-03 00:00:00'],
            ['original' => '7/03/2019 10:00:01', 'expected' => '2019-07-03 10:00:01'],
            ['original' => '03/2/19', 'expected' => '2019-03-02 00:00:00'],
            ['original' => '03/2/19 00:04:10', 'expected' => '2019-03-02 00:04:10'],
            ['original' => '1/3/15', 'expected' => '2015-01-03 00:00:00'],
            ['original' => '1/3/19 10:00:00', 'expected' => '2019-01-03 10:00:00'],
        ];
        foreach ($dates as $date) {
            $parsed = CSVParser::parseDate($date['original'], $this->tz);
            $this->assertEquals($date['expected'], $parsed);
        }
    }

    /** @test */
    public function will_not_parse_invalid_date()
    {
        $date = ['original' => '13/02/2019', 'expected' => '2019-02-13 00:00:00'];
        $this->expectException(InvalidDateException::class);
        CSVParser::parseDate($date['original'], $this->tz);
    }

    /** @test */
    public function can_parse_rows()
    {
        $contents = ' email,last_name,ip,first_name,timestamp
jane@example.com,smith,192.168.0.11,jane,2019-05-09 12:09:00
john@example.com,smith,192.168.0.11,john,2019-05-09 12:09:00
';
        $file = $this->writeCsvFile($contents);
        $config = [
            'columns' => ['email', 'first_name', 'last_name', 'ip', 'timestamp',]
        ];
        $parsed = (new CSVParser($config))->parseCSVIntoArray($file, $offset=0, $limit=3);
        @unlink($file);
        $this->assertCount(2, $parsed);
        $contact1 = $parsed[0];
        $expected1 = [
            'email' => 'jane@example.com',
            'first_name' => 'jane',
            'last_name' => 'smith',
            'ip' => '192.168.0.11',
            'timestamp' => "2019-05-09 12:09:00",
        ];
        $this->assertEquals($expected1, $contact1);
        $contact2 = $parsed[1];
        $expected2 = [
            'email' => 'john@example.com',
            'first_name' => 'john',
            'last_name' => 'smith',
            'ip' => '192.168.0.11',
            'timestamp' => "2019-05-09 12:09:00",
        ];
        $this->assertEquals($expected2, $contact2);
    }

    /** @test */
    public function can_parse_rows_even_if_column_names_have_spaces()
    {
        $contents = ' email, last_name ,ip,first_name,timestamp
jane@example.com,smith,192.168.0.11,jane,2019-05-09 12:09:00
john@example.com,smith,192.168.0.11,john,2019-05-09 12:09:00
';
        $file = $this->writeCsvFile($contents);
        $config = [
            'columns' => ['email', 'first_name', 'last_name', 'ip', 'timestamp',]
        ];
        $parsed = (new CSVParser($config))->parseCSVIntoArray($file, $offset=0, $limit=3);
        @unlink($file);
        $this->assertCount(2, $parsed);
        $contact1 = $parsed[0];
        $expected1 = [
            'email' => 'jane@example.com',
            'first_name' => 'jane',
            'last_name' => 'smith',
            'ip' => '192.168.0.11',
            'timestamp' => "2019-05-09 12:09:00",
        ];
        $this->assertEquals($expected1, $contact1);
    }

    /** @test */
    public function will_remove_utf8_signature_from_start_of_file()
    {
        $contents = '﻿Email,first_name,last_name,timestamp,country
jane@example.com,jane,smith,2019-05-09 12:09,United States
joe@example.com,joe,smith,2019-05-09 12:09,South Africa
';
        $file = $this->writeCsvFile($contents);
        $config = [
            'columns' => ['email',]
        ];
        $parsed = (new CSVParser($config))->parseCSVIntoArray($file, $offset=0, $limit=3);
        @unlink($file);
        $this->assertEquals(['email' => 'jane@example.com'], $parsed[0]);
    }

    /** @test */
    public function will_skip_empty_lines()
    {
        $contents = '﻿Email,first_name,last_name,timestamp,country
jane@example.com,jane,smith,2019-05-09 12:09,United States
joe@example.com,joe,smith,2019-05-09 12:09,South Africa
';
        $file = $this->writeCsvFile($contents);
        $config = [
            'columns' => ['email',]
        ];
        $parsed = (new CSVParser($config))->parseCSVIntoArray($file, $offset=0, $limit=1000);
        @unlink($file);
        $this->assertCount(2, $parsed);
        $this->assertEquals(['email' => 'jane@example.com'], $parsed[0]);
    }

    /** @test */
    public function will_skip_empty_rows()
    {
        $contents = 'email,first_name,last_name,timestamp
johndoe@gmail.com,John,Doe,2017-12-01 12:44:23
,,,
joedoe@gmail.com,Joe,Doe,2017-12-01 12:44:23
,,,
,,,';
        $parsed = $this->createAndParseCsvFile($contents,0, 1000);
        $this->assertCount(2, $parsed);
        foreach($parsed as $contact) {
            $this->assertNotEmpty($contact['email']);
        }
    }

    /** @test */
    public function will_skip_row_if_required_or_skip()
    {
        $contents = 'email,first_name,last_name,timestamp
,John,Doe,2017-12-01 12:44:23
joedoe@gmail.com,Joe,Doe,2017-12-01 12:44:23
';
        $file = $this->writeCsvFile($contents);
        $config = [
            'columns' => [
                'email' => ['rules' => 'required_or_skip|email'],
                'first_name'
            ]
        ];
        $parsed = (new CSVParser($config))->parseCSVIntoArray($file, $offset=0, $limit=1000);
        @unlink($file);
        $this->assertCount(1, $parsed);
        foreach($parsed as $contact) {
            $this->assertNotEmpty($contact['email']);
        }
    }
}
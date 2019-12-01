<?php

namespace App\Helpers;

use App\Helpers\CsvParser\CsvParser;
use App\Helpers\CsvParser\Exceptions\InvalidCsvFileException;
use App\Helpers\CsvParser\Exceptions\InvalidDateException;
use App\Helpers\CsvParser\Exceptions\InvalidValidationRule;
use App\User;

class TaskImportHelper {

    private $csvParser;
    private $user;
    private $tz;

    public function __construct(User $user, $tz = 'Africa/Johannesburg')
    {
        $this->user = $user;
        $this->tz = $tz;

        $config = [
            'columns' => [
                'project' => [
                    'variants' => 'project',
                    'callback' => function( $value ) {

                        $name = strtolower($value);

                        switch($name) {
                            case 'heat map tracker':
                                $name = str_replace(' ', '', $name);
                                break;
                            case 'rebrandapps_tickethub':
                                $name = str_replace('rebrandapps_', '', $name);
                                break;
                            case 'rebrandapps_general':
                                $name = 'rebrandapps';
                                break;
                            case 'voicestak fix recordrtc':
                                $name = 'voicestak';
                                break;
                        }

                        return $name;
                    }
                ],
                'labels' => [
                    'variants' => 'tags',
                ],
                'start_date',
                'start_time',
                'end_date',
                'end_time',
                'description' => [
                    'callback' => function( $value ) {
                        return strtolower($value) === 'lunch' ? null : $value;
                    }
                ],

            ]
        ];

        $this->csvParser = new CsvParser($config);
    }

    public function parseCsvIntoArray(string $file): array
    {
        $parsedArray = [];
        try {
            $parsedArray = $this->csvParser->parseCSVIntoArray($file, 0, 5000);
        } catch(InvalidCsvFileException $e) {

        } catch(InvalidValidationRule $e) {

        } catch(\Exception $e) {

        }

        return $parsedArray;
    }

    public function process(array $parsedArray): array
    {
        try {
            $fixed = [];
            foreach ($parsedArray as $task) {
                if (empty($task['description']) && empty($task['project_id'])) {
                    continue;
                }

                $fixedTask = $task;
                $fixedTask['start_time'] = CsvParser::parseDate($task['start_date'] . $task['start_time'], $this->tz);
                unset($fixedTask['start_date']);
                $fixedTask['end_time'] = CsvParser::parseDate($task['end_date'] . $task['end_time'], $this->tz);
                unset($fixedTask['end_date']);

                $fixedTask['project_id'] = $this->getProjectId($task);
                unset($fixedTask['project']);
                $fixedTask['label_id'] = $this->getLabelId($task);
                unset($fixedTask['label']);

                $fixed[] = $fixedTask;
            }

        } catch(InvalidDateException $e) {

        } catch(\Exception $e) {

        }

        return $fixed;

    }

    private function getProjectId($task): ?int
    {
        if (empty($task['project'])) {
            return null;
        }

        $projects = $this->user->projects()->get()
            ->map(function($p) {
                $p->name = strtolower($p->name);
                return $p;
            });

        $project = $projects->where('name', $task['project'])->first();

        return !is_null($project) ? $project->id : null;
    }

    private function getLabelId($task): ?int
    {
        if (empty($task['labels'])) {
            return null;
        }

        $exploded = explode(',', strtolower($task['labels']));

        if (empty($exploded[0])) {
            return null;
        }

        $name = $exploded[0];

        if ($name === 'lunch') {
            return null;
        }

        if ($name === 'ticket') {
            $name = 'tickets';
        }

        $labels = $this->user->labels()->get()
            ->map(function($l) {
                $l->name = strtolower($l->name);
                return $l;
            });

        $label = $labels->where('name', $name)->first();

        return !is_null($label) ? $label->id : null;
    }


}
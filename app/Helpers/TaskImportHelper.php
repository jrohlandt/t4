<?php

namespace App\Helpers;

use App\Helpers\CsvParser\CsvParser;
use App\Helpers\CsvParser\Exceptions\InvalidCsvFileException;
use App\Helpers\CsvParser\Exceptions\InvalidDateException;
use App\Helpers\CsvParser\Exceptions\InvalidValidationRule;
use App\User;
use Illuminate\Contracts\Auth\Authenticatable;

class TaskImportHelper {

    private $csvParser;
    private $user;
    private $tz;

    public function __construct(Authenticatable $user, $tz = 'Africa/Johannesburg')
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
                            case 'rebrandapps_pinpoint':
                            case 'rebrandapps_projecthub':
                            case 'rebrandapps_seo_snapshot':
                                $name = str_replace('rebrandapps_', '', $name);
                                if ($name === 'seo_snapshot') {
                                    $name = 'seosnapshot';
                                }
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
                'description',

            ]
        ];

        $this->csvParser = new CsvParser($config);
    }

    public function parseCsvIntoArray(string $file): array
    {
        return $this->csvParser->parseCSVIntoArray($file, 0, 5000);
    }

    public function process(array $parsedArray): array
    {

            $fixed = [];
            foreach ($parsedArray as $task) {
                if (empty($task['description']) && empty($task['project'])) {
                    continue;
                }

                if ($task['description'] === 'Lunch' || strpos($task['labels'], 'lunch') !== false) continue;

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

        $name = strtolower($exploded[0]);

        if ($name === 'ticket' || $name === 'review tickets') {
            $name = 'tickets';
        }

        if (
            $name === 'fe dev'
            || $name === 'research'
            || $name === 'server admin'
            || $name === 'installation'
        ) {
            $name = 'development';
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
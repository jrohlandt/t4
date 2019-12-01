<?php

namespace Tests\Unit;

use App\Client;
use App\Label;
use App\Project;
use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Helpers\TaskImportHelper;

class TaskImportHelperTest extends TestCase
{
    use RefreshDatabase;

    private $projects = [
        'Paykickstart',
        'Heatmaptracker',
        'Pressplay2',
        'Scarcitybuilder',
        'Emailspike',
        'Timerspike',
        'Leadgrab',
        'Rebrandapps',
        'Tickethub',
        'Projecthub',
        'Pinpoint',
        'SeoSnapshot',
        'Webinarignition',
        'Magiweb Core',
        'Reverse Rank Checker',
        'app.seosnapshot.net',
        'ListEruption',
        'Publishvault',
        'eZrestrict',
        'Voicestak',
    ];

    private $labels = [
        'development',
        'bug fix',
        'tickets',
        'meeting',
    ];

    private $user;

    protected function setUp()
    {
        parent::setUp();

        $this->user = factory(User::class)->create();

        foreach($this->projects as $project) {
            factory(Project::class)->create(['name' => $project, 'user_id' => $this->user->id]);
        }

        foreach($this->labels as $label) {
            factory(Label::class)->create(['name' => $label, 'user_id' => $this->user->id]);
        }
    }

    private function writeCsvFile($content)
    {
        $file = storage_path('csv_parser_testing_tmp/').'testCsv.csv';
        @unlink($file);
        file_put_contents($file, $content);
        return $file;
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_can_parse_csv()
    {
        $contents = 'Project,Description,Start date,Start time,End date,End time,Tags
Paykickstart,Do work,2019-10-18,08:00:00,2019-10-18,13:30:00,development
,tickets,2019-10-18,14:45:20,2019-10-18,15:33:40,Ticket
Heat map tracker,More work,2019-10-18,15:33:55,2019-10-18,15:52:44,development
,Lunch,2019-10-18,14:45:20,2019-10-18,13:30:00,lunch
RebrandApps_TicketHub,fix stuff,2019-10-18,08:00:00,2019-10-18,13:30:00,development
';

        $file = $this->writeCsvFile($contents);

        $helper = new TaskImportHelper($this->user);
        $result = $helper->parseCsvIntoArray($file);
        $result = $helper->process($result);
        @unlink($file);

        dd($result);
    }
}

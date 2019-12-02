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

    private $dkprojects = [
        'Paykickstart',
        'Provely',
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
        'Reverse Rank Checker',
        'app.seosnapshot.net',
        'ListEruption',
        'Publishvault',
        'Voicestak',
    ];

    private $mwprojects = [
        'Magiweb Backpacker',
        'PK Affiliate Link Plugin',
        'Property Sage',
        'simple membership form builder integration',
        'simple membership getresponse',
        'style simple membership plugin forms',
        'eZRestrict',
        'Getpaykickstart.com',
    ];

    private $togglNames = [
        'app.seosnapshot.net',
        'EmailSpike',
        'eZRestrict',
        'GetPaykickstart.com',
        'Heat Map Tracker',
        'Leadgrab',
        'ListEruption',
        'Lunch',
        'Magiweb Backpacker',
        'Paykickstart',
        'PK Affiliate Link Plugin',
        'PressPlay2',
        'Property Sage',
        'Provely',
        'PublishVault',
        'RebrandApps_General',
        'RebrandApps_PinPoint',
        'RebrandApps_ProjectHub',
        'RebrandApps_SEO_Snapshot',
        'RebrandApps_TicketHub',
        'Reverse Rank Checker',
        'ScarcityBuilder',
        'simple membership form builder integration',
        'simple membership getresponse',
        'style simple membership plugin forms',
        'Timerspike',
        'Voicestak',
        'Voicestak Fix RecordRTC',
        'Webinarignition',
    ];

    private $expectedNames = [
        'app.seosnapshot.net',
        'emailspike',
        'ezrestrict',
        'getpaykickstart.com',
        'heatmaptracker',
        'leadgrab',
        'listeruption',
        'lunch',
        'magiweb backpacker',
        'paykickstart',
        'pk affiliate link plugin',
        'pressplay2',
        'property sage',
        'provely',
        'publishvault',
        'rebrandapps',
        'pinpoint',
        'projecthub',
        'seosnapshot',
        'tickethub',
        'reverse rank checker',
        'scarcitybuilder',
        'simple membership form builder integration',
        'simple membership getresponse',
        'style simple membership plugin forms',
        'timerspike',
        'voicestak',
        'voicestak', // testing Voicestak Fix RecordRTC
        'webinarignition',
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

        $clientDk = factory(Client::class)->create();
        $clientMw = factory(Client::class)->create();



        foreach($this->dkprojects as $project) {
            factory(Project::class)->create([
                'name' => $project,
                'user_id' => $this->user->id,
                'client_id' => $clientDk->id
            ]);
        }

        foreach($this->mwprojects as $project) {
            factory(Project::class)->create([
                'name' => $project,
                'user_id' => $this->user->id,
                'client_id' => $clientMw->id
            ]);
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
//    public function test_can_parse_csv()
//    {
//        $contents = 'Project,Description,Start date,Start time,End date,End time,Tags
//Paykickstart,Do work,2019-10-18,08:00:00,2019-10-18,13:30:00,development
//,tickets,2019-10-18,14:45:20,2019-10-18,15:33:40,Ticket
//Heat map tracker,More work,2019-10-18,15:33:55,2019-10-18,15:52:44,development
//,Lunch,2019-10-18,14:45:20,2019-10-18,13:30:00,lunch
//RebrandApps_TicketHub,fix stuff,2019-10-18,08:00:00,2019-10-18,13:30:00,development
//';
//
//        $file = $this->writeCsvFile($contents);
//
//        $helper = new TaskImportHelper($this->user);
//        $result = $helper->parseCsvIntoArray($file);
//        dd($result);
//
//        $result = $helper->process($result);
//        @unlink($file);
//
//        dd($result);
//    }

    public function test_correctly_parses_all_project_names()
    {
        $this->assertEquals(count($this->togglNames), count($this->expectedNames));

        $contents = "Project,Description,Start date,Start time,End date,End time,Tags\n";

        foreach (array_merge($this->togglNames) as $project) {
            $contents .= "{$project},Do work,2019-10-18,08:00:00,2019-10-18,13:30:00,development\n";
        }

        $file = $this->writeCsvFile($contents);

        $helper = new TaskImportHelper($this->user);
        $result = $helper->parseCsvIntoArray($file);

        for($i=0; $i < count($this->expectedNames); $i++) {
            $actual = $result[$i]['project'];
            $this->assertEquals($this->expectedNames[$i], $actual);
        }
    }

    public function test_parses_tasks_and_assigns_project_ids()
    {
        $this->assertEquals(count($this->togglNames), count($this->expectedNames));

        $contents = "Project,Description,Start date,Start time,End date,End time,Tags\n";

        foreach (array_merge($this->togglNames) as $project) {
            if ($project === 'Lunch') {
                $contents .= "{$project},Lunch,2019-10-18,08:00:00,2019-10-18,13:30:00,lunch\n";
            } else {
                $contents .= "{$project},Do work,2019-10-18,08:00:00,2019-10-18,13:30:00,development\n";
            }
        }

        $file = $this->writeCsvFile($contents);

        $helper = new TaskImportHelper($this->user);
        $result = $helper->parseCsvIntoArray($file);

//        dd($result);
        $result = $helper->process($result);
        @unlink($file);

        $this->assertEquals(count($this->togglNames) - 1, count($result) ); // lunch task will be removed in $helper->process

        foreach($result as $r) {
            $this->assertNotEmpty($r['project_id']);
        }

    }
}

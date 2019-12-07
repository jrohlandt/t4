<?php

use App\User;
use Illuminate\Database\Seeder;

class ProjectsSeeder extends Seeder
{

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

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::findOrFail(1);

        $seedProjects = array_merge($this->dkprojects, $this->mwprojects);
        $existingProjects = $user->projects;

        foreach ($seedProjects as $sp) {
            foreach($existingProjects as $ep) {
                if ( strtolower(trim($sp)) === strtolower(trim($ep->name)) ) {
                    continue 2;
                }
            }
            $user->projects()->create([
                'name' => $sp,
                'client_id' => 0,
                'color_id' => 9,
            ]);
        }
    }
}

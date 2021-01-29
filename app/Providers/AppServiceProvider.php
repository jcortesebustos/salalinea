<?php

namespace App\Providers;

use App\Helpers\IpHelper;
use App\Traits\ModelRelation;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\ServiceProvider;
use Spatie\Activitylog\Models\Activity;

class AppServiceProvider extends ServiceProvider
{
    use ModelRelation;
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if(config('app.env')==='production')
        {
            URL::forceScheme('https');
        }
        Activity::saving(function (Activity $activity) {
            $activity->properties = $activity->properties->put('ip', IpHelper::getClientIp());
            $activity->properties = $activity->properties->put('user_agent', \Request::header('User-Agent'));
        });

        JsonResource::withoutWrapping();

        Relation::morphMap($this->relations());
    }
}

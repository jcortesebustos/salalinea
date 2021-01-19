<?php

namespace App\Http\Resources;

use App\Enums\MeetingStatus;
use App\Helpers\ArrHelper;
use App\Helpers\CalHelper;
use App\Http\Resources\MediaCollection;
use App\Http\Resources\Option;
use App\Http\Resources\User;
use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Arr;

class Meeting extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $type = ArrHelper::searchByKey(ArrHelper::getTransList('types', 'meeting'), 'uuid', $this->type);

        $status = $this->getMeta('status');
        $config = $this->getMeta('config');

        if (Carbon::parse($this->getMeta('estimated_end_time')) < now() && ! $this->getMeta('keep_alive') && $this->status != MeetingStatus::ENDED) {
            $this->status = MeetingStatus::ENDED;
            $this->save();
        }

        $can_moderate = false;
        $is_blocked = true;

        if ($this->user_id === \Auth::id() || \Auth::user()->hasRole('admin')) {
            $can_moderate = true;
            $is_blocked = false;
        } else {
            $invitee = $this->getInvitee();
            $is_blocked = $invitee->getMeta('is_blocked') ? true : false;
            $can_moderate = $invitee->getMeta('is_moderator') ? true : false;
        }

        return [
           'uuid'                    => $this->uuid,
           'title'                   => $this->title,
           'is_instant_meeting'      => $this->getMeta('instant'),
           'accessible_via_link'     => $this->getMeta('accessible_via_link'),
           'identifier'              => $this->getMeta('identifier'),
           'agenda'                  => $this->agenda,
           'type'                    => $type,
           'category'                => new Option($this->whenLoaded('category')),
           'description'             => $this->description,
           'start_date_time'         => CalHelper::toDateTime($this->start_date_time),
           'period'                  => $this->period,
           'attachments'             => new MediaCollection($this->getMedia()),
           'planned_start_date_time' => CalHelper::toDateTime($this->planned_start_date_time),
           'status'                  => $status,
           'config'                  => array(
               'enable_comments'                      => $this->getConfig($config, 'enable_comments'),
               'private_comments'                     => $this->getConfig($config, 'private_comments'),
               'enable_comment_before_meeting_starts' => $this->getConfig($config, 'enable_comment_before_meeting_starts'),
               'enable_chat'                          => $this->getConfig($config, 'enable_chat'),
               'enable_screen_sharing'                => $this->getConfig($config, 'enable_screen_sharing'),
               'enable_recording'                     => $this->getConfig($config, 'enable_recording'),
               'enable_hand_gesture'                  => $this->getConfig($config, 'enable_hand_gesture'),
               'footer_auto_hide'                     => $this->getConfig($config, 'footer_auto_hide'),
               'enable_file_sharing'                  => $this->getConfig($config, 'enable_file_sharing'),
               'disable_scroll'                       => $this->getConfig($config, 'disable_scroll'),
               'mute_participants_on_start'           => $this->getConfig($config, 'mute_participants_on_start'),
               'layout'                               => $this->getConfig($config, 'layout', false),
           ),
           'delayed'                 => $this->getMeta('snooze_logs') ? true : false,
           'cancellation_reason'     => $this->getMeta('cancellation_reason') ? : null,
           'room_id'                 => $this->when($status === 'live', $this->getMeta('room_id')),
           'started_at'              => CalHelper::toDateTime($this->getMeta('started_at')),
           'ended_at'                => CalHelper::toDateTime($this->getMeta('ended_at')),
           'user'                    => new User($this->whenLoaded('user')),
           'can_moderate'            => $can_moderate,
           'is_blocked'              => $is_blocked,
           'created_at'              => CalHelper::toDateTime($this->created_at),
           'updated_at'              => CalHelper::toDateTime($this->updated_at)
        ];
    }

    private function getConfig($config, $key, $is_boolean = true)
    {
        $value = Arr::has($config, $key) ? Arr::get($config, $key) : config('config.meeting.' . $key);

        if ($is_boolean) {
            return $value ? true : false;
        }

        return $value;
    }
}
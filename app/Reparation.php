<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reparation extends Model
{
    protected $fillable = [
        'state',
        'img_state',
        'observation',
        'img_observation',
        'analysis',
        'solution',
        'img_solution',
        'user_id',
        'brand',
        'model',
        'fail'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

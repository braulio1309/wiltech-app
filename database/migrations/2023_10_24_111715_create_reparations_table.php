<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReparationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reparations', function (Blueprint $table) {
            $table->id();
            $table->string('state');
            $table->string('img_state')->nullable();
            $table->text('observation')->nullable();
            $table->string('img_observation')->nullable();
            $table->text('analysis')->nullable();
            $table->text('solution')->nullable();
            $table->string('img_solution')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->string('brand');
            $table->string('model');
            $table->string('fail');
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reparations');
    }
}

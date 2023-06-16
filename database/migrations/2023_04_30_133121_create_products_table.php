<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Artisan;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        if (!Schema::hasTable('products')) {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id')->unsigned();
            $table->string('title')->nullable();
            $table->string('description', 9500)->nullable();
            $table->text('image')->nullable();
            $table->string('price')->nullable();
            $table->integer('quantity')->nullable();
            $table->timestamps();
        });
        Artisan::call('db:seed', [
            '--class' => ProductsSeeder::class,
        ]);
    }
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {   
        
        Schema::dropIfExists('products');
    }
};

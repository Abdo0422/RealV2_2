<?php
 
namespace Database\Seeders;
 
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class CategorySeeder extends Seeder
{
    /**
     * Run the database seeders.
     */
    public function run()
    {
        DB::table('categories')->insert([
            [
                'name' => 'Electronics',
                'category_image' => 'icon1.png',
            ],
            [
                'name' => 'Sport',
                'category_image' => 'icon8.png',
            ],
            [
                'name' => 'Food',
                'category_image' => 'icon7.png',
            ],
            [
                'name' => 'Games',
                'category_image' => 'icon3.png',
            ],
            [
                'name' => 'Clothing',
                'category_image' => 'icon9.png',
            ],
            [
                'name' => 'Entertainement',
                'category_image' => 'icon10.png',
            ]
           
            // Add more categories as needed
        ]);
    }
}



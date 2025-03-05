<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Table;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        User::insert([
            [
                'name' => 'vung',
                'email' => 'vung@gmail.com',
                'password' => Hash::make('123456'),
                'role' => 'user',
            ],
            [
                'name' => 'lam',
                'email' => 'lam@gmail.com',
                'password' => Hash::make('123456'),
                'role' => 'user',
            ],
            [
                'name' => 'admin',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('123456'),
                'role' => 'admin',
            ],
        ]);


        $tables = [];
        
        for ($i = 1; $i <= 5; $i++) {
            $tables[] = [
                'TableNumber' => "T01-B0$i",
                'Capacity' => 400,
                'Status' => 0,
            ];
        }

        for ($i = 1; $i <= 5; $i++) {
            $tables[] = [
                'TableNumber' => "T02-B0$i",
                'Capacity' => 400,
                'Status' => 0,
            ];
        }

        Table::insert($tables);
    }
}

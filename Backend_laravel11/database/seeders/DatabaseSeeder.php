<?php

namespace Database\Seeders;

use App\Models\MenuCategory;
use App\Models\MenuItem;
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


        $categories = [
            ['CategoryName' => 'Hải sản'],
            ['CategoryName' => 'Đồ uống'],
            ['CategoryName' => 'Khai vị'],
            ['CategoryName' => 'Món chính'],
            ['CategoryName' => 'Tráng miệng'],
        ];

        foreach ($categories as $category) {
            MenuCategory::create($category);
        }

        MenuItem::insert([
            // món ăn hải sản
            [
                'CategoryID'  => 1,
                'Name'        => 'Tôm to',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 3000000,
                'ImageURL'    => 'Hải sản/1.png', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],
            [
                'CategoryID'  => 1,
                'Name'        => 'Mực tươi',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 3400000,
                'ImageURL'    => 'Hải sản/2.jpg', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],
            [
                'CategoryID'  => 1,
                'Name'        => 'Hàu',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 3300000,
                'ImageURL'    => 'Hải sản/3.png', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],
            [
                'CategoryID'  => 1,
                'Name'        => 'Súp hải sản',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 5000000,
                'ImageURL'    => 'Hải sản/4.png', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],
            [
                'CategoryID'  => 1,
                'Name'        => 'Combo lẩu hải sản',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 6000000,
                'ImageURL'    => 'Hải sản/5.jpg', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],
            // đồ uống
            [
                'CategoryID'  => 2,
                'Name'        => 'Nước ép cam',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 100000,
                'ImageURL'    => 'Đồ uống/1.PNG', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],
            [
                'CategoryID'  => 2,
                'Name'        => 'Nước ép cheri',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 100000,
                'ImageURL'    => 'Đồ uống/2.png', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],
            [
                'CategoryID'  => 2,
                'Name'        => 'Nước ép táo',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 100000,
                'ImageURL'    => 'Đồ uống/3.png', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],
            // khai vị
            [
                'CategoryID'  => 3,
                'Name'        => 'Nem cuốn hải sản',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 800000,
                'ImageURL'    => 'Khai vị/1.png', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],
            [
                'CategoryID'  => 3,
                'Name'        => 'Nem cuốn chay',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 700000,
                'ImageURL'    => 'Khai vị/2.png', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],
            [
                'CategoryID'  => 3,
                'Name'        => 'Say hoa quả',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 900000,
                'ImageURL'    => 'Khai vị/3.png', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],
            [
                'CategoryID'  => 3,
                'Name'        => 'Rau củ quả',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 100000,
                'ImageURL'    => 'Khai vị/4.png', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],
            //món chính
            [
                'CategoryID'  => 4,
                'Name'        => 'Thịt bò sốt vang',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 200000,
                'ImageURL'    => 'Món chính/1.png', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],
            [
                'CategoryID'  => 4,
                'Name'        => 'Cá hồi',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 200000,
                'ImageURL'    => 'Món chính/2.jpg', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],
            [
                'CategoryID'  => 4,
                'Name'        => 'Cơm trộn',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 150000,
                'ImageURL'    => 'Món chính/3.png', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],
            [
                'CategoryID'  => 4,
                'Name'        => 'Thịt gà ủ',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 170000,
                'ImageURL'    => 'Món chính/4.png', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],

            [
                'CategoryID'  => 5,
                'Name'        => 'Kem mật',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 90000,
                'ImageURL'    => 'Tráng miệng/2.png', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],
            [
                'CategoryID'  => 5,
                'Name'        => 'dừa say',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 70000,
                'ImageURL'    => 'Tráng miệng/3.png', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],
            [
                'CategoryID'  => 5,
                'Name'        => 'Quả',
                'Description' => 'sản phẩm đều tươi ngon',
                'Price'       => 170000,
                'ImageURL'    => 'Tráng miệng/4.png', // Đường dẫn tới public/uploads
                'Status'      => 'còn nhiều',
            ],
        ]);
    }
}

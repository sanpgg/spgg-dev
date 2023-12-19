<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Estado;
use App\Models\Sancion;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $user= new User();
        $user->name="Master";
        $user->last_name_1="last_name_1";
        $user->last_name_2="last_name_2";
        $user->email="admin@gmail.com";
        $hash= bcrypt("12345");
        $user->password=$hash;
        $user->active=true;
        $user->role_id = 1;
        $user->save();
    }
}

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::group([
    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers',
    'prefix' => 'auth'
], function () {
    
    Route::post('login', 'UserController@login');

    // Password recuperar
    Route::post('password/create', [PasswordResetController::class, 'create']);
    Route::get('password/find/{token}', [PasswordResetController::class, 'find']);
    Route::post('password/reset', [PasswordResetController::class, 'reset']);
    
    /*Dashboard*/
    Route::group([
      'middleware' => 'auth:api'
    ], function() {

        /*Usuarios*/
        Route::get('usuarios', 'UserController@index');
        Route::get('usuarios/{id}', 'UserController@show');
        Route::put('usuarios', 'UserController@update');
        Route::post('usuarios', 'UserController@store');

        /*Roles*/
        Route::resource('roles', RoleController::class);
        
        /*Dashboard*/
        Route::get('logout', 'UserController@logout');

        /*Estadisticas*/
        Route::get('estadisticas', 'EstadisticasController@cardsDashboard');
        Route::get('dataCard', 'EstadisticasController@cardData');
        Route::post('graficas', 'EstadisticasController@graficas');

    });
});
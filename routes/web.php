<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'app', 'middleware' => 'auth'], function() {
    Route::get('/', 'Backend\TaskController@index');
    Route::get('/tasks', 'Backend\TaskController@index');
    Route::get('/tasks/active', 'Backend\TaskController@active');
    Route::post('/tasks', 'Backend\TaskController@store');
    Route::put('/tasks/{id}', 'Backend\TaskController@update'); // Todo change to patch as per laravel convention.
    Route::delete('/tasks/{id}', 'Backend\TaskController@destroy');


});



Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

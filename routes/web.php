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

Route::get('/sandbox', function() {

    $colors = \App\Color::all();

    return view('sandbox', compact(['colors']));
});

Route::group(['prefix' => 'app', 'middleware' => 'auth'], function() {

    // Tasks
    Route::get('/', 'Backend\TaskController@index');
    Route::get('/tasks', 'Backend\TaskController@index');
    Route::get('/tasks/active', 'Backend\TaskController@active');
    Route::post('/tasks', 'Backend\TaskController@store');
    Route::put('/tasks/{id}', 'Backend\TaskController@update'); // Todo change to patch as per laravel convention.
    Route::delete('/tasks/{id}', 'Backend\TaskController@destroy');

    // Projects
    Route::get('/projects', 'Backend\ProjectController@index');
    Route::post('/projects', 'Backend\ProjectController@store');
    Route::put('/projects/{id}', 'Backend\ProjectController@update'); // Todo change to patch as per laravel convention.
    Route::delete('/projects/{id}', 'Backend\ProjectController@destroy');

    // Clients
    Route::get('/clients', 'Backend\ClientController@index');
    Route::post('/clients', 'Backend\ClientController@store');
    Route::put('/clients/{id}', 'Backend\ClientController@update'); // Todo change to patch as per laravel convention.
    Route::delete('/clients/{id}', 'Backend\ClientController@destroy');

    // Labels
    Route::get('/labels', 'Backend\LabelController@index');
    Route::post('/labels', 'Backend\LabelController@store');
    Route::put('/labels/{id}', 'Backend\LabelController@update'); // Todo change to patch as per laravel convention.
    Route::delete('/labels/{id}', 'Backend\LabelController@destroy');

    // Colors 
    Route::get('/colors', 'Backend\ColorController@index');
    
});



Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::group(['middleware' => 'auth'], function() {
    Route::get('/prototyping', function() {
        return view('prototyping.project-popup');
    });
});

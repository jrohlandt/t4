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

Route::group([
    'prefix' => 'app',
    'namespace' => 'Backend',
    'middleware' => 'auth'], function() {

    // Tasks
    Route::get('/', 'TaskController@index');
    Route::get('/tasks', 'TaskController@index');
    Route::get('/tasks/active', 'TaskController@active');
    Route::post('/tasks', 'TaskController@store');
    Route::put('/tasks/{id}', 'TaskController@update'); // Todo change to patch as per laravel convention.
    Route::delete('/tasks/{id}', 'TaskController@destroy');

    // Reports
    Route::get('/reports', 'ReportController@index');
    Route::post('/reports/stats', 'ReportController@stats');

    
    // Projects
    Route::get('/projects', 'ProjectController@index');
    Route::post('/projects', 'ProjectController@store');
    Route::put('/projects/{id}', 'ProjectController@update'); // Todo change to patch as per laravel convention.
    Route::delete('/projects/{id}', 'ProjectController@destroy');

    // Clients
    Route::get('/clients', 'ClientController@index');
    Route::post('/clients', 'ClientController@store');
    Route::put('/clients/{id}', 'ClientController@update'); // Todo change to patch as per laravel convention.
    Route::delete('/clients/{id}', 'ClientController@destroy');

    // Labels
    Route::get('/labels', 'LabelController@index');
    Route::post('/labels', 'LabelController@store');
    Route::put('/labels/{id}', 'LabelController@update'); // Todo change to patch as per laravel convention.
    Route::delete('/labels/{id}', 'LabelController@destroy');

    // Colors 
    Route::get('/colors', 'ColorController@index');
    
});



Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::group(['middleware' => 'auth'], function() {
    Route::get('/prototyping', function() {
        return view('prototyping.project-popup');
    });
});

Route::get('/logout', function() {
    Auth::logout();
    return redirect('login');
});

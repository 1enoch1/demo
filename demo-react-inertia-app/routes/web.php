<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    // return inertia('app');
    return Inertia::render('Test');
});

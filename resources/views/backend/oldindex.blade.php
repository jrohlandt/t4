<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ mix('/css/backend/app.css') }}" type="text/css" />

    <title>T4</title>
</head>
<body>
    <div id="app"></div>
    <script src="{{ mix('/js/backend/manifest.js') }}"></script> 
    <script src="{{ mix('/js/backend/vendor.js') }}"></script> 
    <script src="{{ mix('/js/backend/app.js') }}"></script> 
</body>
</html>

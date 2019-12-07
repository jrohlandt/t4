<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSV Import</title>
</head>
<body>
@if (session()->has('success'))
    <p style="color: #62cc47;">{{ session()->get('success') }}</p>
@endif
<form action="{{ route('app.tasks.csvImport') }}" method="post" enctype="multipart/form-data">
    {{ csrf_field() }}
    <label for="csv-file">Upload csv file with contacts.</label>
    <input id="csv-file" type="file" name="csv_file">
    <br>
    <br>
    <input type="submit" value="Import">
</form>
@if ($errors->any())
    <ul style="color: red;">
        @foreach( $errors->all() as $e )
            <li>{{ $e }}</li>
        @endforeach
    </ul>
@endif
</body>
</html>
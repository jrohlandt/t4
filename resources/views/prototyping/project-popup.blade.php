@extends('prototyping.layout')

@section('styles')
<style>
        html, body {
            padding: 0;
            margin: 0;
            height: 100%;
        }

        .popup-overlay {
            position: absolute;
            display: flex;
            justify-content: center;
            height: 100%;
            width: 100%;
            background: tomato;
        }

        .popup-form {
            display: grid;
            grid-template-rows: 100px 50px 100px;
            height: 250px;
            width: 400px;
            margin-top: 200px;
            background: yellow;
        }

        .row-1 {
            background: greenyellow;

        }

        .row-2 {
            background: rgb(47, 255, 255);
            
        }

        .row-3 {
            background: rgb(189, 47, 255);
            
        }
    </style>
@endsection

@section('content')
    <div class="popup-overlay">
        <div class="popup-form">
            <div class="row-1">Row 1</div>
            <div class="row-2">Row 2</div>
            <div class="row-3">Row 3</div>
        </div>
    </div>
@endsection
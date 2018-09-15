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
            grid-template-rows: 75px 50px 100px;
            height: 250px;
            width: 500px;
            margin-top: 200px;
            background: yellow;
            padding: 10px;
        }

        .row-1 {
            background: greenyellow;

        }

        .row-2 {
            display: grid;
            grid-template-columns: auto 50px auto;
            background: rgb(47, 255, 255);
            
        }

        .row-3 {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            background: rgb(189, 47, 255);
        }

        .row-3 > div {
            display: flex;
            justify-content: center;
            margin-top: 50px;
        }

        .popup-input {
            height: 50px;
            padding: 5px;
            border: none;
        }

        .popup-selected-color {
            position: relative;
            background: pink;

        }

        .popup-color-palette {
            position: absolute;
            top: 50px;
            left: 0;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 30px;
            width: 100px;
            background: white;
            padding: 5px;
        }

        .popup-buttons {
            display: flex;
            justify-content: center;
            height: 40px;
            max-width: 100px;
            /* line-height: 30px; */
            padding: 10px;
            cursor: pointer;
        }

        .popup-cancel-button {
            background: grey;
        }

        .popup-create-button {
            background: blue;
        }

    </style>
@endsection

@section('content')
    <div class="popup-overlay">
        <div class="popup-form">
            <div class="row-1">
                <h3>Create New Project</h3>
            </div>
            <div class="row-2">
                <input class="popup-input" type="text" />
                <div class="popup-selected-color">
                    <div>c</div>
                    <div class="popup-color-palette">
                        <div class="swatch" style="background: rgb(69, 147, 219);"></div>
                        <div class="swatch" style="background: rgb(5, 73, 136);"></div>
                        <div class="swatch" style="background: rgb(74, 219, 69);"></div>
                        <div class="swatch" style="background: rgb(159, 64, 236);"></div>
                        <div class="swatch" style="background: rgb(245, 215, 80);"></div>
                        <div class="swatch" style="background: rgb(63, 221, 221);"></div>
                        <div class="swatch" style="background: rgb(59, 59, 59);"></div>
                    </div>

                </div>
                <div>
                    long client name
                </div>
            </div>
            <div class="row-3">
                <div>
                    <div class="popup-buttons popup-cancel-button">Cancel</div>
                </div>
                <div>
                    <div class="popup-buttons popup-create-button">Create</div>
                </div>
            </div>
        </div>
    </div>
@endsection
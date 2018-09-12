


<style>

    .color-palette {
        list-style: none;
        width: 100px;
        min-height: 100px;
        padding: 10px;
        background: white;
    }

    .color-patch {
        float: left;
        width: 25px;
        height: 25px;
        margin-top: 5px;
        margin-right: 5px;
    }
</style>
<div class="color-palette">
    @foreach ( $colors as $color )
        
            <li>
                <div class="color-patch" style="background-color: hsl({{ $color->value }});"></div>
            </li>
        
    @endforeach
</div>
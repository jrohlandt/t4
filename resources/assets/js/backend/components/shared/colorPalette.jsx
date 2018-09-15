import React from 'react';

import Check from 'react-icons/lib/fa/check';

const ColorPalette = (props) => (
    <div className="color-palette">
        { props.colors.map(c => (
            <div 
                key={c.id}
                className='color-swatch' 
                onClick={() => props.handleChange(c.id)} 
                style={{ backgroundColor: `hsl(${ c.value })` }}
            >
                { c.id === props.selected ? <Check /> : '' }
            </div>
            ))
        }
    </div>
);

export default ColorPalette;

        
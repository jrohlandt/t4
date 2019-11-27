import React from 'react';

import { FaCheck } from 'react-icons/fa';


const ColorPalette = (props) => (
    <div className="color-palette">
        { props.colors.map(c => (
            <div 
                key={c.id}
                className='color-swatch' 
                onClick={() => props.handleChange(c.id)} 
                style={{ backgroundColor: `hsl(${ c.value })` }}
            >
                { c.id === props.selected ? <FaCheck /> : '' }
            </div>
            ))
        }
    </div>
);

export default ColorPalette;

        
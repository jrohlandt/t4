import React from 'react';

const ColorPalette = (props) => (
    <div className="color-palette">
        { props.colors.map(c => (
            <li key={c.id} >
                <div 
                    className='color-patch' 
                    style={{ backgroundColor: `hsl(${ c.value })` }}></div>
            </li>
            )) 
        }
        
    </div>
);

export default ColorPalette;

        
import React from 'react';

import { FaTimes } from 'react-icons/fa';


const ConfirmDelete = (props) => {
    return (
        <div>
            <div className='popup-delete box-shadow-heavy' >
                <div className="popup-form-row-1">
                    <h3 className="popup-heading">{props.text}</h3>
                    <div className="popup-close" onClick={props.close} >
                        <FaTimes size={20}/>
                    </div>
                </div>
                <div className="popup-delete-row-2">
                    <div className="button delete-button" onClick={props.delete}>Delete</div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDelete;
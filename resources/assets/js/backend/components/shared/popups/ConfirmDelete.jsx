import React from 'react';

import Close from 'react-icons/lib/fa/close';

const ConfirmDelete = (props) => {
    return (
        <div>
            <div className='popup-delete box-shadow-heavy' >
                <div className="popup-form-row-1">
                    <h3>{props.text}</h3>
                    <div className="popup-close" onClick={props.close} >
                        <Close size={20}/>
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
import React from 'react';

import { FaTrash, FaEdit } from 'react-icons/fa';

const RowActions = (props) => (
    <td className='listing-td-actions'>
        <div onClick={() => props.delete(props.id)}>
            <FaTrash size={20}/>
        </div>
        <div style={{paddingTop: '6px'}}onClick={() => props.edit(props.id)}>
            <FaEdit size={20}/>
        </div>
    </td>
);

export default RowActions;
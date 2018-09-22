import React from 'react';

import Trash from 'react-icons/lib/fa/trash';
import Pencil from 'react-icons/lib/fa/edit';

const RowActions = (props) => (
    <td className='listing-td-actions'>
        <div onClick={() => props.delete(props.id)}>
            <Trash size={20}/>
        </div>
        <div onClick={() => props.edit(props.id)}>
            <Pencil size={20}/>
        </div>
    </td>
);

export default RowActions;
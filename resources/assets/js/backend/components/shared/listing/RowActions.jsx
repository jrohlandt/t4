import React from 'react';

import Trash from 'react-icons/lib/fa/trash';
import Pencil from 'react-icons/lib/fa/edit';

const RowActions = (props) => (
    <td className='listing-td-actions'>
        <div onClick={() => props.delete(props.id)}>
            <Trash/>
        </div>
        <div onClick={() => props.edit(props.id)}>
            <Pencil/>
        </div>
    </td>
);

export default RowActions;
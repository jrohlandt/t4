import React from 'react';

import RowActions from './RowActions';
import LoadingAnimation from '../loadingAnimation';

const List = (props) => { 

    if (props.loading) {
        return (<LoadingAnimation/>);
    }
    
    if (props.data.length < 1) {
        return (<div>You don\'t have any projects yet.</div>);
    }
    
    return (
        <div className='listing-table-wrapper'>
            <table className='listing-table' cellSpacing='0'>
                { props.config.head !== true 
                    ? <thead></thead>
                    : 
                    <thead>
                        <tr>
                            {
                                props.config.columns.map(c => <th key={c.name}>{c.displayName}</th>)
                            }
                        </tr>
                    </thead>
                }
                <tbody>
                    {
                        props.data.map(v => 
                            <tr key={v.id}>
                                {
                                    props.config.columns.map(c => {

                                        let item = '';
                                        if (c.name.indexOf('.') !== -1) {

                                            let keys = c.name.split('.');
                                            for (let i=0; i < keys.length; i++) {

                                                let key = keys[i];
                                                if (!item && v[key] !== undefined && v[key] !== null) {
                                                    item = v[key];
                                                } else if (item[key] !== undefined) {
                                                    item = item[key];
                                                } else {
                                                    item = '';
                                                    break;
                                                }
                                            }
                                        } else {
                                            if (v[c.name] !== undefined) {
                                                item = v[c.name];
                                            }
                                        }
                                        let style = {};
                                        if (c.size !== undefined) {
                                            style = {width: c.size + '%'};
                                        }
                                        
                                        return (
                                            <td key={c.name} style={style}>
                                                { props.config.project && c.name === 'name' && v.color.value
                                                    ? 
                                                        <div className='listing-project-color-wrapper'>
                                                            <span 
                                                                className='listing-project-color'
                                                                style={{background: `hsl(${v.color.value})`}}>
                                                            </span>
                                                        </div>
                                                    : ''
                                                }
                                                <div className='listing-item-wrapper'>{item}</div>
                                                
                                            </td>
                                        );
                                    })
                                }
                                <RowActions id={v.id} edit={props.edit} delete={props.delete} />
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default List;

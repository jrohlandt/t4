import React from 'react';

import { FaFolder, FaTag } from 'react-icons/fa';

class DropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expand: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleOnBlur = this.handleOnBlur.bind(this);
    }

    toggleDropdown() {
        this.setState({ expand: !this.state.expand });
    }

    handleOnBlur() {
        console.log('on blur');
        setTimeout(() => this.setState({expand: false}), 0);
    }

    handleChange(itemId) {

        this.setState({ expand: false });
        // Call parent handler.
        this.props.handleChange(itemId);
    }

    render() {
        const props = this.props;
        let selectedName;
        let itemColor;
        const items = props.options.map((o, i) => {
            if (props.selected !== 0 && props.selected === o.id) {
                selectedName = o.name;
                if (o.color !== undefined) {
                    itemColor = o.color.value;
                }
            }

            

            return (
                <li 
                    key={o.id} 
                    onClick={ () => this.handleChange(o.id) } >
                        {
                            o.color !== undefined
                            ? <span 
                                style={{
                                    marginRight: '10px', 
                                    width: '8px',
                                    height: '8px',
                                    background: `hsl(${o.color.value}`
                                }}
                                className='ttr-dropdown-project-dot'></span>
                            : ''
                        }
                    { o.name.length > 25
                        ? o.name.substring(0, 25) + '...'
                        : o.name
                    }
                </li>
            );
        });

        let icon;
        switch (props.role) {
            case 'project-select':
                icon = <FaFolder size={14}/>;
                break;
            case 'label-select':
                icon = <FaTag size={14}/>;
                break;
            default:
                icon = <FaFolder size={14}/>;
        }

        return (
            <div 
                className={ 
                    (selectedName ? 'ttr-dropdown ttr-' + props.role + ' ' : 'ttr-dropdown ttr-no-selected ') + (this.state.expand ? 'ttr-dropdown-expanded' : '')} 
            >
                <div className='ttr-dropdown-list-wrapper'
                    tabIndex={0}
                    onClick={this.toggleDropdown} 
                    onBlur={this.handleOnBlur} 
                >
                    <div 
                        className='ttr-dropdown-icon'
                        style={ itemColor ? {'color': `hsl(${itemColor})`} : {} }
                    >
                        { 
                            selectedName 
                                ? (props.role === 'project-select' ? <div><span style={{background: (itemColor ? `hsl(${itemColor})`: '') }}className='ttr-dropdown-project-dot'></span>{selectedName}</div> : selectedName)
                                : icon 
                        }
                    </div>
                    { this.state.expand 
                        ? <div className='ttr-dropdown-list box-shadow-heavy'>
                                <ul>{items}</ul>
                            </div>
                        : ''
                    }
                </div>
            </div>
        );
    }
    
};

export default DropDown;
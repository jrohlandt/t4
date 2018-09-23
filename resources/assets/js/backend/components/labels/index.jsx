import React from 'react';
import Ajax from '../../core/Helpers/AjaxHelper';

import Close from 'react-icons/lib/fa/close';

import List from '../shared/listing/table';
import ConfirmDelete from '../shared/popups/ConfirmDelete';
import LoadingAnimation from '../shared/loadingAnimation';

const emptyLabel = {
    name: ''
};

class Labels extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            labels: [],
            showPopup: false, // Valid values are: create, edit, delete and false.
            activeLabel: {...emptyLabel},
            storingNewLabel: false,
            tableConfig: {
                head: false,
                columns: [
                    {name: 'name'},
                ]
            }
        }

        this.showPopup = this.showPopup.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
        this.create = this.create.bind(this);
        this.store = this.store.bind(this);
        this.save = this.save.bind(this);
        this.hidePopup = this.hidePopup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
    }

    handleChange(event) {
        let label = {...this.state.activeLabel};
        label.name = event.target.value;
        this.setState({activeLabel: label});
    }

    confirmDelete(id) {
        this.showPopup('delete', id);
    }

    showPopup(type, id=0) {
        let newState = {
            showPopup: type,
        };

        if (id !== 0) {
            newState.activeLabel = this.state.labels.filter(c => c.id == id)[0];
        }
        this.setState(newState);
    }

    hidePopup() {
        this.setState({
            showPopup: false,
            activeLabel: {...emptyLabel},
        })
    }

    delete() {
        const id = this.state.activeLabel.id;
        const labels = [...this.state.labels].filter(c => c.id != id);
        this.setState({labels});
        this.hidePopup();

        Ajax.delete('/app/labels/' + id, {})
            .catch(err => console.log(err));
    }

    edit(id) {
        this.showPopup('edit', id);
    }

    save() {
        if (!this.state.activeLabel.id) {
            return this.store();
        }

        const labels = this.state.labels.map(c => {
            if (this.state.activeLabel.id === c.id) {
                return this.state.activeLabel;
            }
            return c;
        });
        this.setState({labels});
        this.hidePopup();
        
        Ajax.put('/app/labels/' + this.state.activeLabel.id, this.state.activeLabel)
            .catch(err => console.log(err));
    }

    create() {
        this.showPopup('create');
    }

    store() {

        // Just return if the Create button was already clicked.
        if (this.state.storingNewLabel) {
            return;
        }

        this.setState({storingNewLabel: true});
        Ajax.post('/app/labels/', this.state.activeLabel)
            .then(res => {
                let labels = [...this.state.labels];
                labels.push(res.label);
                this.setState({labels, storingNewLabel: false}); 
                this.hidePopup();
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        Ajax.get('/app/labels')
            .then(res => {
                this.setState({labels: res.labels, loading: false});
            })
            .catch(err => console.log(err));
    }

    render() {
        
        if (this.state.loading) {
            return (<LoadingAnimation/>);
        }
        
        const showPopup = this.state.showPopup;

        return (
            <div>

                <div className='main-header'>
                    <h1>Labels</h1>
                    <div 
                        className="button create-button" 
                        onClick={this.create}>Create Label
                    </div>
                </div>
                
                <div className={ 'popup-overlay ' + (showPopup ? 'popup-show' : 'popup-hide')}>

                    {
                        showPopup === 'delete' 
                            ? 
                                <ConfirmDelete 
                                    text={`Deleting Label ${this.state.activeLabel.name}`}
                                    delete={this.delete}
                                    close={this.hidePopup}
                                /> 
                            : 
                                <div>
                                    <div className='popup-edit box-shadow-heavy' >
                                        <div className="popup-form-row-1">
                                            <h3 className="popup-heading">
                                                {(this.state.activeLabel.id ? 'Edit' : 'Create') + ' Label'}
                                            </h3>
                                            <div className="popup-close" onClick={this.hidePopup} >
                                                <Close size={20}/>
                                            </div>
                                        </div>
                                        <div className='popup-form-row-2'>
                                            <input 
                                                className="popup-input"
                                                type="text" 
                                                value={this.state.activeLabel.name} 
                                                onChange={this.handleChange} 
                                            />
                                        </div>
                                        <div className="popup-form-edit-row-3">
                                            {
                                                this.state.storingNewLabel
                                                    ?
                                                        <div className='button button-disabled'>
                                                            Creating...
                                                        </div>
                                                    :
                                                        <div 
                                                            className='button create-button' 
                                                            onClick={this.save}>
                                                            {showPopup === 'edit' ? 'Save' : 'Create'}
                                                        </div>
                                            }
                                        </div>
                                    </div>
                                </div>

                    }
                    
                </div>

                <List 
                    config={this.state.tableConfig}
                    data={this.state.labels}
                    delete={this.confirmDelete}
                    edit={this.edit}
                />

                
            </div>
        );
    }
};

export default Labels;
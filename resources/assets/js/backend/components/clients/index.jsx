import React from 'react';
import Ajax from '../../core/Helpers/AjaxHelper';

import Close from 'react-icons/lib/fa/close';
import List from '../shared/listing/table';
import ConfirmDelete from '../shared/popups/ConfirmDelete';


const emptyClient = {
    name: ''
};

class Clients extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            clients: [],
            showPopup: false, // Valid values are: create, edit, delete and false.
            activeClient: {...emptyClient},
            storingNewClient: false,
            tableConfig: {
                head: false,
                columns: [
                    {name: 'name'},
                ]
            }
        }

        this.showPopup = this.showPopup.bind(this);
        this.deleteClient = this.deleteClient.bind(this);
        this.editClient = this.editClient.bind(this);
        this.createClient = this.createClient.bind(this);
        this.storeClient = this.storeClient.bind(this);
        this.saveClient = this.saveClient.bind(this);
        this.hidePopup = this.hidePopup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);

    }

    handleChange(event) {
        console.log('hadnle');
        let client = {...this.state.activeClient};
        client.name = event.target.value;
        this.setState({activeClient: client});
    }

    confirmDelete(id) {
        this.showPopup('delete', id);
    }

    showPopup(type, id=0) {
        let newState = {
            showPopup: type,
        };

        if (id !== 0) {
            newState.activeClient = this.state.clients.filter(c => c.id == id)[0];
        }
        this.setState(newState);
    }

    hidePopup() {
        this.setState({
            showPopup: false,
            activeClient: {...emptyClient},
        })
    }

    deleteClient() {
        const id = this.state.activeClient.id;
        const clients = [...this.state.clients].filter(c => c.id != id);
        this.setState({clients});
        this.hidePopup();

        Ajax.delete('/app/clients/' + id, {})
            .catch(err => console.log(err));
    }

    editClient(id) {
        this.showPopup('edit', id);
    }

    saveClient() {

        if (!this.state.activeClient.id) {
            return this.storeClient();
        }

        const clients = this.state.clients.map(c => {
            if (this.state.activeClient.id === c.id) {
                return this.state.activeClient;
            }
            return c;
        });
        this.setState({clients});
        this.hidePopup();
        
        Ajax.put('/app/clients/' + this.state.activeClient.id, this.state.activeClient)
            .catch(err => console.log(err));
    }

    createClient() {
        this.showPopup('create');
    }

    storeClient() {

        // Just return if the Create button was already clicked.
        if (this.state.storingNewClient) {
            return;
        }

        this.setState({storingNewClient: true});
        Ajax.post('/app/clients/', this.state.activeClient)
            .then(res => {
                let clients = [...this.state.clients];
                clients.push(res.client);
                this.setState({clients, storingNewClient: false}); 
                this.hidePopup();
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        Ajax.get('/app/clients')
            .then(res => {
                this.setState({clients: res.clients});
            })
            .catch(err => console.log(err));
    }

    render() {

        const showPopup = this.state.showPopup;

        return (
            <div>

                <div className='main-header'>
                    <h1>Clients</h1>
                    <div 
                        className="button create-button" 
                        onClick={this.createClient}>Create Client
                    </div>
                </div>
                
                <div className={ 'popup-overlay ' + (showPopup ? 'popup-show' : 'popup-hide')}>

                    {
                        showPopup === 'delete' 
                            ? 
                                <ConfirmDelete 
                                    text={`Deleting Client ${this.state.activeClient.name}`}
                                    delete={this.deleteClient}
                                    close={this.hidePopup}
                                /> 
                            : 
                                <div>
                                    <div className='popup-edit box-shadow-heavy' >
                                        <div className="popup-form-row-1">
                                            <h3 className="popup-heading">
                                                {(this.state.activeClient.id ? 'Edit' : 'Create') + ' Client'}
                                            </h3>
                                            <div className="popup-close" onClick={this.hidePopup} >
                                                <Close size={20}/>
                                            </div>
                                        </div>
                                        <div className='popup-form-row-2'>
                                            <input 
                                                className="popup-input"
                                                type="text" 
                                                value={this.state.activeClient.name} 
                                                onChange={this.handleChange} 
                                            />
                                        </div>
                                        <div className="popup-form-edit-row-3">
                                            {
                                                this.state.storingNewClient
                                                    ?
                                                        <div className='button button-disabled'>
                                                            Creating...
                                                        </div>
                                                    :
                                                        <div 
                                                            className='button create-button' 
                                                            onClick={this.saveClient}>
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
                    data={this.state.clients}
                    delete={this.confirmDelete}
                    edit={this.editClient}
                />

                
            </div>
        );
    }
};

export default Clients;
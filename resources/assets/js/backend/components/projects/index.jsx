import React from 'react';
import Ajax from '../../core/Helpers/AjaxHelper';

import List from '../shared/listing/table';
import ColorPalette from '../shared/colorPalette.jsx';

import Close from 'react-icons/lib/fa/close';
import CaretDown from 'react-icons/lib/fa/caret-down';
import AngleDown from 'react-icons/lib/fa/angle-down';

const emptyProject = {
    name: '',
    client_id: 0,
    color_id: 1,
};

class Projects extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            colors: [],
            clients: [],
            showPopup: false, // Valid values are: create, edit, delete and false.
            showClientDropdown: false,
            showColorPalette: false,
            activeProject: {...emptyProject},
            savingToDb: false,
            errors: {},
            tableConfig: {
                head: true,
                project: true,
                columns: [
                    {name: 'name', displayName: 'Project', size: 20},
                    {name: 'client.name', displayName: 'Client', size: 20},
                    // {name: 'total', displayName: 'Total'},
    
                ]
            },
        }

        this.showPopup = this.showPopup.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
        this.create = this.create.bind(this);
        this.store = this.store.bind(this);
        this.save = this.save.bind(this);
        this.hidePopup = this.hidePopup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.getColorById = this.getColorById.bind(this);
        this.getColorValueById = this.getColorValueById.bind(this);
        this.toggleColorPalette = this.toggleColorPalette.bind(this);
        this.handleValidationErrors = this.handleValidationErrors.bind(this);
        this.clearValidationErrors = this.clearValidationErrors.bind(this);
        this.getClientById = this.getClientById.bind(this);
        this.getClientNameById = this.getClientNameById.bind(this);
        this.changeClient = this.changeClient.bind(this);
        this.toggleClientDropdown = this.toggleClientDropdown.bind(this);
        this.hideDropdowns = this.hideDropdowns.bind(this);
        this.confirmDelete = this.confirmDelete.bind(this);
    }

    handleChange(event) {
        let activeProject = {...this.state.activeProject};
        activeProject.name = event.target.value;
        this.setState({activeProject});
    }

    confirmDelete(id) {
        this.showPopup('delete', id);
    }

    showPopup(type, id=0) {
        let newState = {
            showPopup: type,
        };

        if (id !== 0) {
            newState.activeProject = this.state.projects.filter(c => c.id == id)[0];
        }
        this.setState(newState);
    }

    hidePopup() {
        this.setState({
            showPopup: false,
            showColorPalette: false,
            showClientDropdown: false,
            errors: {},
            activeProject: {...emptyProject},
        });
    }

    hideDropdowns() {
        if (this.state.showColorPalette === true) {
            this.setState({showColorPalette: false});
        }

        if (this.state.showClientDropdown === true) {
            this.setState({showClientDropdown: false});
        }
    }

    toggleColorPalette() {
        this.setState({showColorPalette: !this.state.showColorPalette});
    }

    changeColor(colorId) {
        let activeProject = {...this.state.activeProject};
        activeProject.color_id = colorId;
        activeProject.color = this.getColorById(colorId);
        this.toggleColorPalette();
        this.setState({activeProject});
    }

    getColorById(colorId) {
        const colors = this.state.colors.filter(c => c.id === colorId);

        if (colors.length > 0) {
            return colors[0];
        }
    }

    getColorValueById(colorId) {
        const color = this.getColorById(colorId);

        if (color) {
            return color['value'];
        }

        return '';
    }

    toggleClientDropdown() {
        this.setState({showClientDropdown: !this.state.showClientDropdown});
    }

    changeClient(clientId) {
        let activeProject = {...this.state.activeProject};
        activeProject.client = this.getClientById(clientId);
        activeProject.client_id = clientId;
        this.toggleClientDropdown();
        this.setState({activeProject});
    }

    getClientById(clientId) {
        const clients = this.state.clients.filter(c => c.id === clientId);

        if (clients.length > 0) {
            return clients[0];
        }
    }

    getClientNameById(clientId) {
        const client = this.getClientById(clientId);
        return client['name'];
    }

    delete() {
        const id = this.state.activeProject.id;
        const projects = [...this.state.projects].filter(c => c.id != id);
        this.setState({projects});
        this.hidePopup();

        Ajax.delete('/app/projects/' + id, {})
            .catch(err => console.log(err));
    }

    edit(id) {
        this.showPopup('edit', id);
    }

    save() {

        if (this.state.activeProject.name === undefined || this.state.activeProject.name === '') {
            this.handleValidationErrors({validationErrors: {name: 'Please enter a project name'}});
            return;
        }

        if (!this.state.activeProject.id) {
            return this.store();
        }

        const id = this.state.activeProject.id;
        const projects = this.state.projects.map(p => {
            if (id === p.id) {
                return this.state.activeProject;
            }
            return p;
        });
        this.setState({projects});
        this.hidePopup();
        
        Ajax.put('/app/projects/' + id, this.state.activeProject)
            .then(() => this.clearValidationErrors())
            .catch(err => this.handleValidationErrors(err));
    }

    create() {
        this.showPopup('create');
    }

    store() {

        // Just return if the Create button was already clicked.
        if (this.state.savingToDb) {
            return;
        }

        this.setState({savingToDb: true});
        Ajax.post('/app/projects/', this.state.activeProject)
            .then(res => {
                let projects = [...this.state.projects];
                projects.push(res.project);
                this.setState({projects, savingToDb: false}); 
                this.clearValidationErrors();
                this.hidePopup();
            })
            .catch(err => {
                this.handleValidationErrors(err);
            })
            .then(() => this.setState({savingToDb: false}));
    }

    clearValidationErrors() {
        this.setState({errors: {}});
    }

    handleValidationErrors(errors) {
        if (errors.validationErrors !== undefined) {
            this.setState({errors: errors.validationErrors});
        }
    }

    componentDidMount() {
        Ajax.get('/app/projects')
            .then(res => this.setState({projects: res.projects}))
            .catch(err => console.log(err));

        Ajax.get('/app/clients')
            .then(res => this.setState({clients: res.clients}))
            .catch(err => console.log(err));

        Ajax.get('/app/colors')
            .then(res => this.setState({colors: res.colors}))
            .catch(err => console.log(err));
    }

    render() {

        const showPopup = this.state.showPopup;

        return (
            <div>

                <div className='main-header'>
                    <h1>Projects</h1>
                    <div 
                        className="button create-button" 
                        onClick={this.create}>Create Project
                    </div>

                </div>
                
                <div className={ 'popup-overlay ' + (showPopup ? '' : 'popup-hide')}>

                    {
                        showPopup === 'delete' 
                            ? 
                            <div>
                                <div className='popup-form box-shadow-heavy' >
                                    <div className="popup-form-row-1">
                                        <h3>Deleting project <small>{this.state.activeProject.name}</small></h3>
                                        <div className="popup-close" onClick={this.hidePopup} ><Close size={20}/></div>
                                    </div>
                                    <div className="popup-form-row-2">
                                    </div>
                                    <div className="popup-form-row-3">
                                        <div className="popup-buttons popup-delete-button" onClick={this.delete}>Delete</div>
                                    </div>
                                </div>
                            </div>
                            : 
                            <div>
                                <div className="popup-form box-shadow-heavy" onClick={this.hideDropdowns}>
                                    <div className="popup-form-row-1">
                                        <h3 className="popup-heading">{this.state.activeProject.id ? 'Edit' : 'Create'} project</h3>
                                        <div className="popup-close" onClick={this.hidePopup} ><Close size={20}/></div>
                                    </div>
                                    <div className="popup-form-row-2">
                                        <div>
                                            <div className='box-shadow-light'>
                                                <input 
                                                    className="popup-input" 
                                                    type="text"
                                                    value={this.state.activeProject.name} 
                                                    onChange={this.handleChange}
                                                    placeholder='Project name...'
                                                />
                                                <div className='popup-selected-client-container' onClick={this.toggleClientDropdown}>
                                                    <div className='popup-selected-client' >
                                                        { 
                                                            this.state.activeProject.client_id 
                                                                ? this.getClientNameById(this.state.activeProject.client_id)
                                                                : 'Select Client' 
                                                        }
                                                    </div>
                                                    <div className='popup-selected-client-caret'>
                                                        <AngleDown size={20} />
                                                    </div>
                                                    {
                                                        this.state.showClientDropdown 
                                                        ? 
                                                        <div className="popup-client-dropdown box-shadow-heavy">
                                                            {
                                                                this.state.clients.length
                                                                    ? 
                                                                    <ul>
                                                                        {
                                                                            this.state.clients.map(c => (
                                                                                <li 
                                                                                    key={c.id} 
                                                                                    onClick={() => this.changeClient(c.id)}
                                                                                    className={ c.id === this.state.activeProject.client_id ? 'selected' : '' }
                                                                                >
                                                                                    {c.name}
                                                                                </li>
                                                                            ))
                                                                        } 
                                                                    </ul>
                                                                    : 'No clients'
                                                            }
                                                        </div>
                                                        : ''
                                                    }
                                                </div>
                                            </div>
                                            <span>{ this.state.errors.name }</span>
                                        </div> 
                                    </div>
                                    <div className="popup-form-row-3">
                                        <div className="popup-selected-color-container box-shadow-light" onClick={this.toggleColorPalette} >
                                            <div 
                                                className='popup-selected-color' 
                                                style={{background: `hsl(${this.getColorValueById(this.state.activeProject.color_id)})`}}>
                                            </div>
                                            <div className='popup-selected-color-container-caret'>
                                                <CaretDown size={15} />
                                            </div>
                                            { this.state.showColorPalette 
                                                ? 
                                                <div className="popup-color-palette-container box-shadow-heavy">
                                                    <ColorPalette 
                                                        selected={this.state.activeProject.color_id} 
                                                        handleChange={this.changeColor} 
                                                        colors={this.state.colors} 
                                                    />
                                                </div>
                                                : ''
                                            }
                                            
                                        </div>
                                        <div>
                                            <div className="button create-button" onClick={this.save}>{showPopup === 'edit' ? 'Save' : 'Create'} Project</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                
                                

                    }
                    
                </div>

                <List 
                    config={this.state.tableConfig} 
                    data={this.state.projects} 
                    edit={this.edit}
                    delete={this.confirmDelete}
                />
                
            </div>
        );
    }
};

export default Projects;
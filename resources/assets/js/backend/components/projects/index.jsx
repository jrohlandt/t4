import React from 'react';
import Ajax from '../../core/Helpers/AjaxHelper';

import List from '../shared/listing/list.jsx';
import Row from '../shared/listing/row.jsx';
import ColorPalette from '../shared/colorPalette.jsx';

import Close from 'react-icons/lib/fa/close';
import CaretDown from 'react-icons/lib/fa/caret-down';

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
            showColorPalette: false,
            activeProject: {...emptyProject},
            savingToDb: false,
            errors: {},
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
        this.getColorValueById = this.getColorValueById.bind(this);
        this.toggleColorPalette = this.toggleColorPalette.bind(this);
        this.handleValidationErrors = this.handleValidationErrors.bind(this);
        this.clearValidationErrors = this.clearValidationErrors.bind(this);
    }

    handleChange(event) {
        let activeProject = {...this.state.activeProject};
        activeProject.name = event.target.value;
        this.setState({activeProject});
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
            activeProject: {...emptyProject},
        });
    }

    toggleColorPalette() {
        this.setState({showColorPalette: !this.state.showColorPalette});
    }

    changeColor(colorId) {
        let activeProject = {...this.state.activeProject};
        activeProject.color_id = colorId;
        this.toggleColorPalette();
        this.setState({activeProject});
    }

    getColorValueById(colorId) {
        const colors = this.state.colors.filter(c => c.id === colorId);

        if (colors.length > 0) {
            return colors[0]['value'];
        }
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

        Ajax.get('/app/colors')
            .then(res => this.setState({colors: res.colors}))
            .catch(err => console.log(err));
    }

    render() {

        const projectRows = this.state.projects.map(v => 
            <Row 
                key={v.id} 
                id={v.id} 
                name={v.name} 
                showPopup={this.showPopup}
                editRow={this.edit}
            />
        );

        const showPopup = this.state.showPopup;

        return (
            <div>

                <div className='main-header'>
                    <h1>Projects</h1>
                    <div 
                        className='create-new-btn'
                        onClick={this.create}>Create New</div>
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
                                <div className="popup-form box-shadow-heavy">
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
                                                />
                                                <div className='popup-selected-client-container'>
                                                    long client name
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
                                            <div className="popup-buttons popup-create-button" onClick={this.save}>{showPopup === 'edit' ? 'Save' : 'Create'} Project</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                
                                

                    }
                    
                </div>

                <List>
                    {projectRows}
                </List>

                
            </div>
        );
    }
};

export default Projects;
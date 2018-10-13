'use strict';
import React from 'react';
import DropDown from './dropdown.jsx';
import DisplayTimer from './timer.jsx';
import DateHelper from '../../core/Helpers/DateHelper';
import TaskHelper from '../../core/Helpers/TaskHelper';
import Trash from 'react-icons/lib/md/delete';
import Stop from 'react-icons/lib/fa/stop';
import Play from 'react-icons/lib/fa/play';


const getProjectName = (projectId, projects) => {
    
    for (let i=0; i < projects.length; i++) {
        let project = projects[i];
        if (project.id == projectId) {
            return project.name;
        }
    }

    return 'no project';
};

const getLabelName = (labelId, labels) => {
    
    for (let i=0; i < labels.length; i++) {
        let label = labels[i];
        if (label.id == labelId) {
            return label.name;
        }
    }

    return '';
};

class ActiveTaskRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isActiveTask: false,
            showInput: false,
            showExtras: false,
            descriptionChanged: false,
            task: {
                description: '',
                start_time: 0,
            },
        }

        this.date = new DateHelper;  

        this.createTask                 = this.createTask.bind(this);
        this.updateTask                 = this.updateTask.bind(this);
        this.toggleTimer                = this.toggleTimer.bind(this);
        this.handleProjectChange        = this.handleProjectChange.bind(this);
        this.handleLabelChange          = this.handleLabelChange.bind(this);
        this.handleDescriptionChange    = this.handleDescriptionChange.bind(this);
        this.handleDescriptionOnBlur    = this.handleDescriptionOnBlur.bind(this);
        this.showInput                  = this.showInput.bind(this);
        this.hideInput                  = this.hideInput.bind(this);
    }

    handleDescriptionChange(event) {
        const task = this.state.task;
        task.description = event.target.value;

        this.setState({task, descriptionChanged: true});
    }

    showInput() {
        this.setState({showInput: true});
    }

    hideInput() {
        this.setState({showInput: false});
    }

    handleDescriptionOnBlur(event) {
        this.hideInput();

        if (this.state.descriptionChanged) {
            this.setState({descriptionChanged: false});        
            this.updateTask();        
        }
    }

    createTask(task={}) {
        console.log('task row create', task);
        if (Object.keys(task).length > 0) {
            this.props.createTask(task);
            return;
        }

        this.props.createTask(this.state.task);
    }

    updateTask(task={}) {
        let t;
        if (Object.keys(task).length > 0) {
            t = Object.assign({}, task);
        } else {
            t = Object.assign({}, this.state.task);
        }

        if (TaskHelper.hasNotBeenCreated(t)) {
            this.createTask(task);
            return;
        }

        this.props.updateTask(t, this.state.isActiveTask);
    }

    toggleTimer() {

        let task = Object.assign({}, this.state.task);
        const date = new Date();

        if ( ! TaskHelper.isStarted(task) ) {
            task.start_time = this.date.toMysqlDateTime(date);
            this.updateTask(task);
            return;
        }

        task.end_time = this.date.toMysqlDateTime(date);
        this.updateTask(task);
    }

    handleProjectChange(projectId) {
        this.updateTask(Object.assign(this.state.task, {project_id: projectId}));
    }

    handleLabelChange(labelId) {
        this.updateTask(Object.assign(this.state.task, {label_id: labelId}));
    }

    displayDuration(task) {
        let date = new DateHelper;
        const durationInSeconds = date.mysqlToSeconds(task.end_time) - date.mysqlToSeconds(task.start_time);
        return date.durationForDisplay(durationInSeconds);
    }

    // @param string mysqlDateTime
    displayTime(mysqlDateTime) {
        let date = new DateHelper;
        if (mysqlDateTime && mysqlDateTime.indexOf('1970') === -1) {
            return date.getTimeOnly(mysqlDateTime);
        }
        return '';
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.task !== this.state.task) {
            this.setState({task: nextProps.task});
        }
    }

    componentDidMount() {
        const p = this.props;
        const isActiveTask = p.isActiveTask != undefined ? p.isActiveTask : false;
        this.setState({task: p.task, isActiveTask});
    }

    render() {
        const props = this.props;
        const task = this.state.task;
        return (
            <li 
                onMouseOver={this.showExtras} 
                onMouseLeave={this.hideExtras}
                className={(props.isActiveTask ? 'timer-active-task-row ' : 'timer-task-row ') + (this.state.showExtras ? ' timer-task-row-active' : '') } 
            >

                <div className="ttr-left">
                        <div className="ttr-description-wrapper" >
                            {
                                this.state.showInput === false 
                                ?   <div className='ttr-description'
                                        onClick={this.showInput}>{task.description ? task.description : (props.isActiveTask ? 'Type task description...' : 'no description')}</div>
                                : 
                                    <input 
                                        autoFocus
                                        size={ task.description ? task.description.length : 15 }
                                        className={ 'ttr-description-input ' + (this.state.showExtras ? ' ttr-description-input-active' : '')}
                                        type="text" 
                                        onChange={ this.handleDescriptionChange } 
                                        onBlur={ this.handleDescriptionOnBlur }
                                        value={ task.description }
                                        placeholder={props.isActiveTask ? 'Type task description...' : 'no description'}
                                    />
                            }
                            
                        </div>

                        <DropDown 
                            selected={ task.project_id } 
                            handleChange={ this.handleProjectChange } 
                            options={ props.projects }
                            role="project-select"
                        />
                        
                </div>
                
                <div className="ttr-right">
                    <DropDown 
                        selected={ task.label_id } 
                        handleChange={ this.handleLabelChange } 
                        options={ props.labels } 
                        role="label-select"
                    />
                    <div className="ttr-last">
                        <div className="ttr-times" >
                            {/* { ! props.isActiveTask 
                                ? <span>{this.displayTime(task.start_time)} - {this.displayTime(task.end_time)}</span> 
                                : ''
                            } */}
                        </div>
                        <div className="ttr-display-timer">
                            { TaskHelper.isStarted(task) ? <DisplayTimer startTime={task.start_time} /> : this.displayDuration(task) }
                        </div> 
                        <div className="ttr-actions">
                            <div 
                                className={TaskHelper.isStarted(task) ? 'ttr-stop-button' : 'ttr-start-button'}
                                onClick={this.toggleTimer}>
                                {TaskHelper.isStarted(task) ? <Stop size={15} /> : <Play size={15}/>}
                            </div>
                            <span 
                                className="ttr-delete"
                                onClick={ () => props.deleteTask(task.id) }
                            >
                                <Trash size={20} />
                            </span>
                        </div>
                    </div>
                </div>
                
            </li>
        );
    }
    
};

export default ActiveTaskRow;
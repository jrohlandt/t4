'use strict';

import React from 'react';
import TaskRow from './task-row.jsx';

import Ajax from '../../core/Helpers/AjaxHelper';
import DateHelper from '../../core/Helpers/DateHelper';
import TaskHelper from '../../core/Helpers/TaskHelper';


var emptyTask = {
    description: '',
};

const emptyLabel = {
    id: 0,
    name: 'none',
}

const emptyProject = {
    id: 0,
    name: 'none',
}

class Timer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            authUser: {},
            tasks: [],
            activeTask: Object.assign({}, emptyTask),
            projects: [],
            labels: [],
        };

        this.ajaxUrl = '/app/tasks/';
        this.date = new DateHelper;

        this.createTask = this.createTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.getTasks = this.getTasks.bind(this);
        this.getActiveTask = this.getActiveTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    getTasks() {
        Ajax.get(this.ajaxUrl)
            .then(res => this.setState({tasks: res.tasks}))
            .catch(err => console.log('Could not fetch tasks. Error: ', err));
    }

    getActiveTask() {
        Ajax.get(this.ajaxUrl + 'active')
            .then(res => {

                if (res.task == undefined) { 
                    this.setState({ activeTask: Object.assign({}, emptyTask) });
                    return;
                }

                this.setState({ activeTask: Object.assign({}, res.task) });
            })
            .catch(err => console.log('Could not fetch active task. Error: ', err));
    }
    
    createTask(task) {
        
        if (task.id)
            return;

        Ajax.post(this.ajaxUrl, task)
            .then(res => this.setState( {activeTask: Object.assign(task, res.task)} ))
            .catch(err => console.log('Task could not be created. Error: ', err));
    }

    updateTask(task, isActiveTask=false) {

        if (!task.id)
            return;

        this.setState((currentState) => {

            if ( isActiveTask ) {
                if (TaskHelper.isDone(task)) {
                    return {
                        tasks: [task].concat(currentState.tasks),
                        activeTask: Object.assign({}, emptyTask),
                    };
                }

                return {
                    activeTask: task,
                };
            }

            return {
                tasks: currentState.tasks.map((t, i) => {
                    if (task.id !== t.id)
                        return t;

                    return task;
                }),
            };

        });


        // Update server.
        Ajax.put(this.ajaxUrl + task.id, task)
            .catch(err => console.log('Task could not be updated. Error: ', err));
    }

    deleteTask(id) {

        // todo handle activeTask as well.
        this.setState((currentState) => {
            const tasks = currentState.tasks.filter((task) => task.id !== id);
            return {
                tasks,
            }
        });

        Ajax.delete(this.ajaxUrl + id, {})
            .catch(err => console.log('Task could not be deleted. Error: ', err));
    }

    componentDidMount() {
        this.getTasks();
        this.getActiveTask();

        Ajax.get('/app/projects')
            .then(res => {
                let projects = res.projects;
                projects.unshift(emptyProject);
                this.setState({projects})
            })
            .catch(err => console.log(err));

        Ajax.get('/app/labels')
            .then(res => {
                let labels = res.labels;
                labels.unshift(emptyLabel);
                this.setState({labels})
            })
            .catch(err => console.log(err));
    }

    render() {

        let tasksRows = [];
        let dateKey;
        const tasks = TaskHelper.sortTasksByDate(this.state.tasks);

        for (dateKey in tasks) {
            if ( ! tasks.hasOwnProperty(dateKey) ) {
                continue;
            }

            tasksRows.push(
                <li 
                    key={dateKey} 
                    className='tasks-date-heading'
                >
                    <div >
                        <h3>
                            {this.date.formatDateHeading(dateKey)}
                            <span>{TaskHelper.dailyTotal(tasks[dateKey])}</span>
                        </h3>
                    </div>
                </li>
            );
            tasksRows.push(tasks[dateKey].map((t, i) => 
                <TaskRow 
                    task={t} 
                    projects={this.state.projects} 
                    labels={this.state.labels} 
                    key={t.id} 
                    updateTask={this.updateTask}
                    deleteTask={this.deleteTask}
                />
            ));
        }

        const activeTask = this.state.activeTask;

        return (
            <div>
                <div>
                    <ul className="tasks-rows" >
                        <TaskRow 
                            task={activeTask} 
                            projects={this.state.projects} 
                            labels={this.state.labels} 
                            key={activeTask.id} 
                            createTask={this.createTask} 
                            updateTask={this.updateTask}
                            deleteTask={this.deleteTask}
                            isActiveTask='true'
                        />
                    </ul>
                </div>
                <div>
                    <ul className="tasks-rows">
                        {tasksRows}
                    </ul>       
                </div>
            </div>
        );
    }
}; 

export default Timer;
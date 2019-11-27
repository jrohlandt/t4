import DateHelper from './DateHelper';

class TaskHelper {

    constructor() {
        this.date = new DateHelper();
    }
    
    // Create a object that stores each task by it's date.
    sortTasksByDate(tasks) {
        let tasksByDate = {};
        for ( let i=0; i < tasks.length; i++ ) {
            let task    = tasks[i];
            let dateKey = this.date.toMysqlDate(new Date(task.start_time));
            
            if ( ! tasksByDate.hasOwnProperty(dateKey) ) {
                tasksByDate[dateKey] = [];
            }
            
            tasksByDate[dateKey].push(task);
        }

        return tasksByDate;
    }

    fillDefaultValues(tasks) {
        return tasks.map(t => {
            if (t.description === null) {
                t.description = '';
            }

            return this.fixDateTimes(t);
        });
    }

    fixDateTimes(task) {
        let t = {...task};

        if (task.start_time) {
            // take utc (iso 8601) time from server and create new local time from it.
            t.start_time = new DateHelper().toMysqlDateTime(new Date(t.start_time));

            if (task.end_time) {
                // take utc (iso 8601) time from server and create new local time from it.
                t.end_time = new DateHelper().toMysqlDateTime(new Date(t.end_time));
            }
        }

        return t;
    }

    dailyTotal(tasks) {
        let total = 0;
        for (let i=0; i < tasks.length; i++) {
            let startTime = tasks[i].start_time;
            let endTime = tasks[i].end_time;
            let duration = this.date.durationInSeconds(startTime, endTime);
            total += duration;
        }

        return this.date.durationForDisplay(total);
    }
    

    hasNotBeenCreated(task) {
        return !task.id;
    }

    isStarted(task) {

        if (!task.start_time)
            return false;

        return new Date(task.start_time).getTime() > 0;
    }

    // Check if a task is done (has a valid end date).
    isDone(task) {

        if (!task.end_time)
            return false;

        return this.isStarted(task) && new Date(task.end_time).getTime() > 0;
    }
}

export default new TaskHelper();
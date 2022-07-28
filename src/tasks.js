import { isThisMonth, isThisWeek, isToday, parseISO } from "date-fns";
import { downloadfromStorage, savetoStorage } from "./storage";
import { makeTask } from "./UI";

let todayTasks = [];
let weekTasks = [];
let monthTasks = [];

class Task {
    constructor(title, descritpion, date) {
        this.title = title;
        this.descritpion = descritpion;
        this.date = date;
    };

    set setTitle(title){
        this.title = title;
    };

    set setDescription(descritpion){
        this.descritpion = descritpion;
    };

    set setDate(date){
        this.date = date;
    };

    get getTitle() {
        return this.title;
    };

    get getDescription() {
        return this.descritpion;
    };

    get getDate() {
        const day = this.date.split('-')[2];
        const month = this.date.split('-')[1];
        const year = this.date.split('-')[0];
        return `${year}-${month}-${day}`;
    };
};

const adddefaultTask = () => {
    const titleC = document.querySelector('.titleContent');
    const dateC = document.querySelector('.dateContent');

    const task = new Task;

    task.setTitle = titleC.value;
    task.setDate = dateC.value;

    return task;
};

const appendTask = () => {
    if(document.querySelector("#userRoutine")) {
        
    }
    else if(isToday(parseISO(adddefaultTask().getDate))){
        console.log('today')
        todayTasks.push(adddefaultTask());
        savetoStorage('todayTasks',todayTasks);
    }
    else if(isThisWeek(parseISO(adddefaultTask().getDate))){
        console.log('week')
        weekTasks.push(adddefaultTask())
        savetoStorage('weekTasks',weekTasks);
    }
    else if(isThisMonth(parseISO(adddefaultTask().getDate))){
        console.log('month')
        monthTasks.push(adddefaultTask())
        savetoStorage('monthTasks',monthTasks);
    }
}

const updateTasks = (when) => {
    let place = document.querySelector('.' + when);
    place.innerHTML = '';
    let arr;

    if (when === "tasksToday") {
        arr = todayTasks;
    }
    else if (when === 'tasksWeek') {
        arr = weekTasks;
    }
    else if (when === 'tasksMonth') {
        arr = monthTasks;
    }
    else if (when==='tasksInbox'){
        arr = todayTasks.concat(weekTasks,monthTasks);
    }
 
    if (localStorage.getItem('todayTasks')) {
        todayTasks = downloadfromStorage('todayTasks');
    }

    if (localStorage.getItem('weekTasks')){
        weekTasks = downloadfromStorage('weekTasks');
    }

    if (localStorage.getItem('monthTasks')){
        monthTasks = downloadfromStorage('monthTasks');
    }

    for (let i = 0; i < arr.length; i++) {
        let title = arr[i].title;
        let date = arr[i].date;
        const div = makeTask(title, date);
        place.appendChild(div);
    }
}


export {appendTask, updateTasks, adddefaultTask, todayTasks};
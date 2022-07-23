import { currentList } from "./website";

const todayTasks = [];
const weekTasks = [];
const monthTasks = [];

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
        return this.date;
    };
};

const adddefaultTask = (arr) => {
    const titleC = document.querySelector('.titleContent');
    const descC = document.querySelector('.descriptionContent');
    const dateC = document.querySelector('.dateContent');

    const task = new Task;

    
    task.setTitle = titleC.value;
    task.setDescription = descC.value;
    task.setDate = dateC.value;

    return task;
};

const appendTask = () => {
    if(currentList === 'Today') {
        todayTasks.push(adddefaultTask())
    }
    else if(currentList === 'Week') {
        weekTasks.push(adddefaultTask())

    }
    else if(currentList === 'Month') {
        monthTasks.push(adddefaultTask())
    }
}

const displayTasks = (task) => {
    if(currentList === 'Today') {
        
    }
    else if(currentList === 'Week') {
        

    }
    else if(currentList === 'Month') {
        
    }
}



export { appendTask };
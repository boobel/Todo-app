import { savetoStorage } from "./storage";
import { makeRoutine } from "./UI";
import { makeaddBtn } from "./UI";


let userRoutines = [];

class Routine {
    constructor(name,taskList){
        this.name =  name;
        this.taskList = taskList;
    };

    set setName(name) {
        this.name = name;
    }

    set setTasks(taskList) {
        this.taskList = taskList;
    }
}

const addUserRoutine = () => {
    const titleC = document.querySelector('#routineName');

    const routine = new Routine;

    routine.setName = titleC.value;

    return routine;
}

const appendRoutine = () => {
    userRoutines.push(addUserRoutine());
    savetoStorage('userRoutines', userRoutines);
    console.log(userRoutines);
}

const updateRoutines = () => {
    const list = document.querySelector('.userProjectsList');

    for(let i = 0; i < userRoutines.length; i++) {
        let title = userRoutines[i].name;
        console.log(title);
        const div = makeRoutine(title);
        list.appendChild(div);
    }
};

const makeRoutineContent = () => {
    const routine = document.createElement('div');


    return routine;
};

const loadRoutineContent = () => {
    const main =document.querySelector('.main');
    main.innerHTML='';

    main.appendChild(makeRoutineContent());
    main.appendChild(makeaddBtn());
};

export {appendRoutine,updateRoutines,loadRoutineContent};
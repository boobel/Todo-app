import { makeaddBtn } from "./UI";
import { appendTask, updateTasks } from "./tasks";
import { makeTitle } from "./today";

const makeWeek = () => {
    const week = document.createElement('div')

    week.classList.add('tasksWeek')
    week.setAttribute('id', 'tasksMain')

    return week
};


const loadWeek = () => {
    const main =document.querySelector('.main')
    main.innerHTML='';

    main.appendChild(makeTitle('this week'));
    main.appendChild(makeWeek());
    main.appendChild(makeaddBtn());
    updateTasks('tasksWeek')

};

export {loadWeek};
import { updateTasks } from "./tasks";
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

    main.appendChild(makeTitle('This week'));
    main.appendChild(makeWeek());
    updateTasks('tasksWeek')

};

export {loadWeek};
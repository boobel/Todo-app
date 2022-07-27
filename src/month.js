import { makeaddBtn } from "./UI";
import { makeTitle } from "./today";
import { appendTask, updateTasks } from "./tasks";


const makeMonth = () => {
    const month = document.createElement('div')

    month.classList.add('tasksMonth')
    month.setAttribute('id', 'tasksMain')

    month.innerHTML = 'This month'


    return month
};



const loadMonth = () => {
    const main =document.querySelector('.main')
    main.innerHTML='';

    main.appendChild(makeTitle('this month'));
    main.appendChild(makeMonth());
    main.appendChild(makeaddBtn());
    updateTasks('tasksMonth')
};

export {loadMonth};
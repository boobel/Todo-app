import { openPopup, makeaddBtn } from "./UI";



const makeWeek = () => {
    const week = document.createElement('div')
    const line = document.createElement("hr");

    week.setAttribute('id', 'tasksMain')
    line.setAttribute("width", "100%");

    week.innerHTML = 'This week'

    week.append(line);

    week.appendChild(makeaddBtn());

    return week
};


const loadWeek = () => {
    const main =document.querySelector('.main')
    main.innerHTML='';

    main.appendChild(makeWeek());
};

export {loadWeek};
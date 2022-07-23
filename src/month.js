import { openPopup, makeaddBtn } from "./UI";

const makeMonth = () => {
    const month = document.createElement('div')
    const line = document.createElement("hr");

    month.setAttribute('id', 'tasksMain')
    line.setAttribute("width", "100%");

    month.innerHTML = 'This month'

    month.append(line);

    month.appendChild(makeaddBtn());


    return month
};



const loadMonth = () => {
    const main =document.querySelector('.main')
    main.innerHTML='';

    main.appendChild(makeMonth());
};

export {loadMonth};
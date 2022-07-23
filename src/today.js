import { makeaddBtn } from "./UI";


const makeToday = () => {
    const today = document.createElement('div');
    const line = document.createElement("hr");

    today.setAttribute('id', 'tasksMain')
    line.setAttribute("width", "100%");


    today.innerHTML = 'Today';

    today.append(line);

    today.appendChild(makeaddBtn());

    return today;
};

const loadToday = () => {
    const main =document.querySelector('.main');
    main.innerHTML='';

    main.appendChild(makeToday());
};

export {loadToday};
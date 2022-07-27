import { makeaddBtn } from "./UI";
import { updateTasks} from "./tasks";


const makeToday = () => {
    const today = document.createElement('div');
    

    today.innerHTML = '';

    today.classList.add('tasksToday')
    today.setAttribute('id', 'tasksMain')
    

    

    

    return today;
};

const makeTitle = (titleC) => {
    const title = document.createElement('h1');
    const line = document.createElement("hr");

    line.setAttribute("width", "100%");

    title.innerHTML=titleC;

    title.append(line)

    return title;
};




const loadToday = () => {
    const main =document.querySelector('.main');
    main.innerHTML='';


    main.appendChild(makeTitle('today'));
    main.appendChild(makeToday());
    main.append(makeaddBtn());
    updateTasks("tasksToday");

};

export {loadToday, makeTitle};
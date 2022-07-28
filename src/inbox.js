import { makeaddBtn } from "./UI";
import {  updateTasks} from "./tasks";
import { makeTitle } from "./today";



const makeInbox = () => { 
    const inbox = document.createElement('div');

    inbox.innerHTML = '';

    inbox.classList.add('tasksInbox');
    inbox.setAttribute('id','tasksMain');

    return inbox;
}

const loadInbox = () => {
    const main =document.querySelector('.main');
    main.innerHTML='';

    main.appendChild(makeTitle('Inbox'));
    main.appendChild(makeInbox());
    main.appendChild(makeaddBtn());
    updateTasks('tasksInbox');
}

export {loadInbox};
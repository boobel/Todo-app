import {makeHeader,makeFooter, loadMenu, loadMain, loadPopup, loadRoutinePopup} from "./UI";
import { loadToday } from "./today";
import { loadWeek } from "./week";
import { loadMonth } from "./month";
import {loadInbox} from "./inbox";
import { updateTasks } from "./tasks";


const buttonListeners = () => {
    const todayButton = document.querySelector('#todayBtn');
    const weekButton = document.querySelector('#weekBtn');
    const monthButton = document.querySelector('#monthBtn');
    const InboxButton = document.querySelector('#inboxBtn');


    InboxButton.addEventListener('click', ()=> {
        loadInbox();
    })

    todayButton.addEventListener('click',() => {
        loadToday();
    })
    weekButton.addEventListener('click',() => {
        loadWeek();
    })
    monthButton.addEventListener('click',() => {
        loadMonth();
    })
};


const runTodo = () => {


    makeHeader();
    makeFooter();
    loadMenu();
    loadMain();
    loadInbox();
    loadPopup();
    loadRoutinePopup();
    buttonListeners();
    updateTasks('tasksInbox');
};


export {runTodo};
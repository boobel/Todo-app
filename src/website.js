import {makeHeader,makeFooter, loadMenu, loadMain} from "./UI";
import { loadToday } from "./today";
import { loadWeek } from "./week";
import { loadMonth } from "./month";
import { loadNotes } from "./notes";


const buttonListeners = () => {
    const todayButton = document.querySelector('#todayBtn');
    const weekButton = document.querySelector('#weekBtn');
    const monthButton = document.querySelector('#monthBtn');
    const notesButton = document.querySelector('#notesBtn');

    todayButton.addEventListener('click',() => {
        loadToday();
    })
    weekButton.addEventListener('click',() => {
        loadWeek();
    })
    monthButton.addEventListener('click',() => {
        loadMonth();
    })
    notesButton.addEventListener('click',() => {
        loadNotes();
    })

};


const runTodo = () => {

    makeHeader();
    makeFooter();
    loadMenu();
    loadMain();
    buttonListeners();
};


export {runTodo};
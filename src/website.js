import {makeHeader,makeFooter, loadMenu, loadMain, loadPopup} from "./UI";
import { loadToday } from "./today";
import { loadWeek } from "./week";
import { loadMonth } from "./month";
import { loadNotes } from "./notes";


let currentList;


const buttonListeners = () => {
    const todayButton = document.querySelector('#todayBtn');
    const weekButton = document.querySelector('#weekBtn');
    const monthButton = document.querySelector('#monthBtn');
    const notesButton = document.querySelector('#notesBtn');



    todayButton.addEventListener('click',() => {
        loadToday();
        currentList = 'Today';
    })
    weekButton.addEventListener('click',() => {
        loadWeek();
        currentList = 'Week';

    })
    monthButton.addEventListener('click',() => {
        loadMonth();
        currentList = 'Month';

    })
    notesButton.addEventListener('click',() => {
        loadNotes();
        currentList = 'Notes';

    })


    return {currentList};
};


const runTodo = () => {

    makeHeader();
    makeFooter();
    loadMenu();
    loadMain();
    loadPopup();
    buttonListeners();
};


export {runTodo, currentList};
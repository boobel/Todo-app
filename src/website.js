import {makeHeader,makeFooter, loadMenu, loadMain, loadPopup} from "./UI";
import { loadToday } from "./today";
import { loadWeek } from "./week";
import { loadMonth } from "./month";

let current;

const buttonListeners = () => {
    const todayButton = document.querySelector('#todayBtn');
    const weekButton = document.querySelector('#weekBtn');
    const monthButton = document.querySelector('#monthBtn');



    todayButton.addEventListener('click',() => {
        loadToday();
        current = 'today';
    })
    weekButton.addEventListener('click',() => {
        loadWeek();
        current = 'week';
    })
    monthButton.addEventListener('click',() => {
        loadMonth();
        current = 'month';
    })

};


const runTodo = () => {

    makeHeader();
    makeFooter();
    loadMenu();
    loadMain();
    loadPopup();
    buttonListeners();
};


export {runTodo, current};
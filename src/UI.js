import { appendTask, deleteTask, updateTasks } from "./tasks";



const makeHeader = () => {
    const header = document.querySelector('.header');
    header.setAttribute('id','header')

    header.textContent= "Todo App";
};


const makeMenu = () => {
    const menu  = document.createElement('div');
    const defaultProjects = document.createElement('div');
    const item1 = document.createElement('button');
    const item2 = document.createElement('button');
    const item3 = document.createElement('button');
    const item4 = document.createElement('button');


    menu.setAttribute('id','menu');
    item1.setAttribute('id','todayBtn');
    item2.setAttribute('id','weekBtn');
    item3.setAttribute('id','monthBtn');
    item4.setAttribute('id','inboxBtn');
    

    menu.classList.add('menu');
    defaultProjects.classList.add("deaultProjects");
    item1.classList.add('item');
    item2.classList.add('item');
    item3.classList.add('item');
    item4.classList.add('item');

    item1.innerHTML = 'Today';
    item2.innerHTML = 'This Week';
    item3.innerHTML = 'This Month';
    item4.innerHTML = 'Inbox'


    defaultProjects.appendChild(item4);
    defaultProjects.appendChild(item1);
    defaultProjects.appendChild(item2);
    defaultProjects.appendChild(item3);

    menu.appendChild(defaultProjects);

    return menu;
};


const makeMain = () => {
    const main = document.createElement('div');
    main.classList.add('main');
    return main;
};

const makeFooter = () => {
    const footer  = document.querySelector('.footer');
    footer.innerHTML = 'Copyright © Patryk Borowski 2022'
};

const makeTaskPopup = () => {
    const popUp = document.createElement('div');
    const titleText = document.createElement('span');
    const titleContent = document.createElement('input');
    const descritpionText = document.createElement('span');
    const descritpionContent = document.createElement('input');
    const dateText = document.createElement('span');
    const dateContent = document.createElement('input');
    const doneBtn = document.createElement('button');
    const closeBtn = document.createElement('button');

    popUp.classList.add('popup');
    titleContent.classList.add('titleContent');
    descritpionContent.classList.add("descriptionContent");
    dateContent.classList.add('dateContent');

    dateContent.setAttribute('type','date');

    titleText.innerHTML = 'Title';
    descritpionText.innerHTML = 'Description';
    dateText.innerHTML = 'Due Date';
    doneBtn.innerHTML = 'Add Task';
    closeBtn.innerHTML = 'Close';

    popUp.appendChild(titleText);
    popUp.appendChild(titleContent);
    popUp.appendChild(descritpionText);
    popUp.appendChild(descritpionContent);
    popUp.appendChild(dateText);
    popUp.appendChild(dateContent);
    popUp.appendChild(doneBtn);
    popUp.appendChild(closeBtn);

    doneBtn.addEventListener('click', () => {
        appendTask();
        updateTasks('tasksInbox')
        closeTaskPopup();
    })

    closeBtn.addEventListener('click', () => {
        closeTaskPopup();
    })

    return popUp;
};


const makeaddTaskBtn = () => {
    const addBtn = document.createElement('button');
    addBtn.innerHTML  = 'Add A Task';

    addBtn.setAttribute('id','addBtn');

    addBtn.addEventListener('click', ()=>{
        openTaskPopup();
    });

    return addBtn;
};

const makeTask = (_title,_date) => {
    const task = document.createElement('div');
    const checkbox = document.createElement('input');
    const title = document.createElement('span');
    const date = document.createElement('span');
    const deleteButton = document.createElement('button');
    
    task.setAttribute('id', 'taskMain');
    checkbox.setAttribute('type','checkbox');
    title.setAttribute('id', 'taskTitle');
    date.setAttribute('id', 'taskDate');
    deleteButton.setAttribute('class','delTaskBtn')

    title.innerHTML =  _title;
    date.innerHTML = "Due Date: " + _date;
    deleteButton.innerHTML = "Delete";

    task.appendChild(checkbox);
    task.appendChild(title);
    task.appendChild(date);
    task.appendChild(deleteButton);


    deleteTask();

    return task;
};

const loadTaskPopup = () => {
    const content = document.querySelector('.content');

    content.appendChild(makeTaskPopup());
};

const openTaskPopup = () => {
    const popup = document.querySelector(".popup");
    
    popup.classList.add('open-popup');

};

const closeTaskPopup = () => {
    const popup = document.querySelector(".popup");


    popup.classList.remove("open-popup");
};

const loadMain = () => {
    const content = document.querySelector(".content");

    content.appendChild(makeMain());
}

const loadMenu = () => {
    const content = document.querySelector(".content");

    content.appendChild(makeMenu());
};

export {makeHeader,makeFooter, makeTask, loadMenu, loadMain, loadTaskPopup as loadPopup, openTaskPopup as openPopup, makeaddTaskBtn as makeaddBtn};
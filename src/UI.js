const makeHeader = () => {
    const header = document.querySelector('.header');
    header.setAttribute('id','header')

    header.textContent= "Todo App";
};


const makeMenu = () => {
    const menu  = document.createElement('div');
    const defaultProjects = document.createElement('div');
    const userProjects = document.createElement('div');
    const item1 = document.createElement('button');
    const item2 = document.createElement('button');
    const item3 = document.createElement('button');
    const item4 = document.createElement('button');

    menu.setAttribute('id','menu');
    item1.setAttribute('id','todayBtn');
    item2.setAttribute('id','weekBtn');
    item3.setAttribute('id','monthBtn');
    item4.setAttribute('id','notesBtn');


    menu.classList.add('menu');
    defaultProjects.classList.add("deaultProjects");
    userProjects.classList.add("userProjects")
    item1.classList.add('item');
    item2.classList.add('item');
    item3.classList.add('item');
    item4.classList.add('item');

    item1.innerHTML = 'Today';
    item2.innerHTML = 'This Week';
    item3.innerHTML = 'This Month';
    item4.innerHTML = 'Notes'
    userProjects.innerHTML = "Routines";

    defaultProjects.appendChild(item1);
    defaultProjects.appendChild(item2);
    defaultProjects.appendChild(item3);
    defaultProjects.appendChild(item4);

    menu.appendChild(defaultProjects);
    menu.appendChild(userProjects);

    return menu
};



const makeMain = () => {
    const main = document.createElement('div')
    main.classList.add('main')

    return main;
};


const loadMain = () => {
    const content = document.querySelector(".content");

    content.appendChild(makeMain());
}

const loadMenu = () => {
    const content = document.querySelector(".content");

    content.appendChild(makeMenu());
};


export {makeHeader, loadMenu, loadMain};
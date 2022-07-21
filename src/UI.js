const makeHeader = () => {
    const header = document.querySelector('.header');
    header.setAttribute('id','header')

    header.textContent= "Todo App";

    return header;
};


const makeMenu = () => {
    const menu  = document.createElement('div');
    const defaultProjects = document.createElement('div')
    const item1 = document.createElement('button');
    const item2 = document.createElement('button');
    const item3 = document.createElement('button');
    


    menu.classList.add('menu');
    menu.setAttribute('id','menu');

    defaultProjects.classList.add("deaultProjects");

    item1.classList.add('item');
    item2.classList.add('item');
    item3.classList.add('item');

    item1.innerHTML = 'Today';
    item2.innerHTML = 'This Week';
    item3.innerHTML = 'This Month';


    defaultProjects.appendChild(item1);
    defaultProjects.appendChild(item2);
    defaultProjects.appendChild(item3);

    menu.appendChild(defaultProjects);

    return menu
};



const loadMenu = () => {
    const content = document.querySelector(".content");

    
    content.appendChild(makeMenu());
};

const loadHeader = () => {
    const content = document.querySelector(".content")


    content.appendChild(makeHeader());
};

export {loadHeader, loadMenu};
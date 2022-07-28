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

    title.setAttribute('id', 'titleH');

    title.innerHTML=titleC;
    


    return title;
};




const loadToday = () => {
    const main =document.querySelector('.main');
    main.innerHTML='';


    main.appendChild(makeTitle('Today'));
    main.appendChild(makeToday());
    updateTasks("tasksToday");

};

export {loadToday, makeTitle};
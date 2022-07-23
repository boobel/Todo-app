const makeToday = () => {
    const today = document.createElement('div');
    const line = document.createElement("hr");

    line.setAttribute("width", "100%");

    today.innerHTML = 'Today';

    today.append(line);

    today.appendChild(makeaddBtn());

    return today;
};

const makeaddBtn = () => {
    const addBtn = document.createElement('button');
    addBtn.innerHTML  = 'Add A Task';

    return addBtn;
};

const loadToday = () => {
    const main =document.querySelector('.main');
    main.innerHTML='';

    main.appendChild(makeToday());
};

export {loadToday};
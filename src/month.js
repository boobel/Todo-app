const makeMonth = () => {
    const month = document.createElement('div')
    const line = document.createElement("hr");

    line.setAttribute("width", "100%");

    month.innerHTML = 'This month'
    month.append(line)

    return month
};



const loadMonth = () => {
    const main =document.querySelector('.main')
    main.innerHTML='';

    main.appendChild(makeMonth());
};

export {loadMonth};
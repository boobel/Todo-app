import { openPopup, makeaddBtn } from "./UI";


const makeNotes = () => {
    const notes = document.createElement('div')
    const line = document.createElement("hr");

    notes.setAttribute('id', 'tasksMain')
    line.setAttribute("width", "100%");

    notes.innerHTML = 'Notes';

    notes.append(line);

    notes.appendChild(makeaddBtn());


    return notes
}


const loadNotes = () => {
    const main =document.querySelector('.main')
    main.innerHTML='';

    main.appendChild(makeNotes());
};

export {loadNotes};
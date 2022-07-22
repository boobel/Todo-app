const makeNotes = () => {
    const notes = document.createElement('div')
    const line = document.createElement("hr");

    line.setAttribute("width", "100%");

    notes.innerHTML = 'Notes'
    notes.append(line)

    return notes
}


const loadNotes = () => {
    const main =document.querySelector('.main')
    main.innerHTML='';

    main.appendChild(makeNotes());
};

export {loadNotes};
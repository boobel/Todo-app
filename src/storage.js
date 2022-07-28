
const savetoStorage = (key,arr) =>{
    localStorage.setItem(key,JSON.stringify(arr))
}

const downloadfromStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export {savetoStorage, downloadfromStorage};
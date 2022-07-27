import { monthTasks, weekTasks, todayTasks } from "./tasks";

const savetoStorage = (key,arr) =>{
    localStorage.setItem(key,JSON.stringify(arr))
}

const downloadfromStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export {savetoStorage, downloadfromStorage};
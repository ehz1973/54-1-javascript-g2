import Tarea from "../clases/Tarea.js";

export const getDataTareas = async (archivo) => {
    let url = location.origin + "/" + archivo;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const getDataApi = async (limite = 5) => {
    let url = "https://dummyjson.com/todos?limit="+limite;
    const response = await fetch(url);
    const data = await response.json();
    let dataArray = data.todos;

    console.log(dataArray);

    dataArray = dataArray.map(tareaApi => {
        let objTarea = new Tarea(tareaApi.todo);
        objTarea.estado = tareaApi.completed;
        return objTarea;
    });

    return dataArray;
}

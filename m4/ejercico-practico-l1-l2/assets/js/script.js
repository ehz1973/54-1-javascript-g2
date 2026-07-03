import Tarea from "./clases/Tarea.js";

//FUNCIÓN QUE SE ENCARGARÁ DE MOSTRAR LAS LATEAS EN UNA LISTA / TABLA
const mostrarTareas = (listaTarea = []) => {
    const listaTareas = document.getElementById("lista-tareas");

    listaTareas.innerHTML = "";

    for (const tarea of listaTarea) {
        let { titulo, descripcion } = tarea;

        const li = document.createElement("li");
        li.textContent = `Titulo: ${titulo}, Descripción: ${descripcion}`;

        listaTareas.append(li);
    }
};

//EVENTO FORMULARIO CREACIÓN DE TAREAS

const formAddTarea = document.getElementById("form-add-tarea");

formAddTarea.addEventListener("submit", (event) => {
    //EVITAMOS LAS ACCIONES POR DEFECTO
    event.preventDefault();

    //CATURAMOS LOS VALORES DE LOS INPUTS / TEXTAREA DEL FORMULARIO
    const tituloInput = document.getElementById("tituloInput");
    const descripcionInput = document.getElementById("descripcionInput");

    let titulo = tituloInput.value;
    let descripcion = descripcionInput.value;

    //CREAMOS INSTANCIA DE LA CLASE TAREA
    let nuevaTarea = new Tarea(titulo, descripcion);
    nuevaTarea.crear();

    let tareas = Tarea.buscarTodos();

    mostrarTareas(tareas);

    formAddTarea.reset();
});

const main = () => {
    let tareas = Tarea.buscarTodos();
    mostrarTareas(tareas);
};

main();

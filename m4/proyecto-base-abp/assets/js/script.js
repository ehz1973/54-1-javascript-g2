import Tarea from "./clases/Tarea.js";

const construirElementoLista = (tarea) => {
    let { id, titulo, descripcion, fechaCreacion } = tarea;
    return `
        <li class="mb-3">
            <p>Titulo: ${titulo}</p>
            <p>Descripción: ${descripcion}</p>
            <p>Estado: ${tarea.estadoStr()}</p>
            <p>Fecha creación: ${fechaCreacion}</p>
            <div>
                <button class="btn btn-warning" data-id="${id}">Finalizar</button>
                <button class="btn btn-danger" data-id="${id}">Eliminar</button>
            </div>
        </li>
    `;
};

//FUNCIÓN PARA ACTUALIZAR LISTA DE TAREAS DEL DOM
const actualizarLista = () => {
    const tareas = Tarea.obtenerTareas();

    if(tareas.length == 0) return;

    //SI EXISTEN TAREAS
    let elementosLista = "";
    for (const tarea of tareas) {
        elementosLista += construirElementoLista(tarea);
    }

    document.getElementById("lista-tareas").innerHTML = elementosLista;

};

//EVENTO SUBMIT FORMULARIO CREAR TAREA

const formAddTarea = document.getElementById("form-add-tarea");

formAddTarea.addEventListener("submit", (event) => {
    event.preventDefault();

    let titulo = document.getElementById("titulo").value;
    let descripcion = document.getElementById("descripcion").value;

    const nuevaTarea = new Tarea(titulo, descripcion);

    nuevaTarea.crear();

    actualizarLista();

    formAddTarea.reset();
});


//EVENTO ELIMINAR TAREAS

const listaTareasDom = document.getElementById("lista-tareas");

//.... por desarrollar



const main = () => {
    actualizarLista();
};

main();

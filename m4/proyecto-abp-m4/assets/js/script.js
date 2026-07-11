import GestorTareas from "./clases/GestorTareas.js";
import { alertExito, alertConfirmacion } from "./utils/alertas.js";

const gestorTareas = new GestorTareas();

const crearFilaTabla = (tarea) => {
    let { id, descripcion, estado, fechaCreacion } = tarea;

    let estadoTexto = estado ? "Finalizada" : "Pendiente";

    let disabled = estado ? "disabled" : "";

    let badgeEstado = estado ? "success" : "warning";

    return `
    <tr>
        <th scope="row">${id.slice(0,6)}...</th>
        <td>${descripcion}</td>
        <td>
            <span class="badge text-bg-${badgeEstado}">${estadoTexto}</span>
        </td>
        <td>${fechaCreacion}</td>
        <td>
            <button class="btn btn-warning btn-finalizar ${disabled}" data-id="${id}">Finalizar</button>
            <button class="btn btn-danger btn-eliminar" data-id="${id}">Eliminar</button>
        </td>
    </tr>
    `;
};


const mostrarStats = () => {
    document.getElementById("output-tareas-total")
    .textContent = gestorTareas.tareasTotal();

    document.getElementById("output-tareas-pendientes")
    .textContent = gestorTareas.tareasPendientes();

    document.getElementById("output-tareas-finalizadas")
    .textContent = gestorTareas.tareasFinalizadas();
}

const cargarTareasTabla = (tareas = []) => {
    mostrarStats();
    if (tareas.length == 0) {
        document
            .getElementById("cuerpo-tabla-placeholder")
            .classList.remove("d-none");
        document.getElementById("cuerpo-tabla").classList.add("d-none");
        return;
    }

    let acumuladorFilas = "";
    for (const tarea of tareas) {
        acumuladorFilas += crearFilaTabla(tarea);
    }

    document.querySelector("#tabla-tareas tbody").innerHTML = acumuladorFilas;

    document.getElementById("cuerpo-tabla-placeholder").classList.add("d-none");
    document.getElementById("cuerpo-tabla").classList.remove("d-none");
};

//EVENTO FORMULARIO CREAR TAREAS

const formAddTarea = document.getElementById("form-add-tarea");

formAddTarea.addEventListener("submit", async (event) => {
    try {
        event.preventDefault();

        const dataFormulario = new FormData(formAddTarea);

        let descripcion = dataFormulario.get("descripcion");

        gestorTareas.crearTarea(descripcion);

        const tareas = await gestorTareas.obtenerTareas();

        const btnCrearTarea = document.getElementById("btn-crear-tarea");
        const btnCrearTareaSpinner = document.getElementById(
            "btn-crear-tarea-spinner",
        );

        btnCrearTarea.classList.add("d-none");
        btnCrearTareaSpinner.classList.remove("d-none");

        setTimeout(() => {
            cargarTareasTabla(tareas);
            //LIMPIAR EL FORMULARIO AL FINAL
            formAddTarea.reset();

            btnCrearTarea.classList.remove("d-none");
            btnCrearTareaSpinner.classList.add("d-none");
        }, 1500);
    } catch (error) {
        console.log(error);
    }
});

//EVENTO FINALIZAR TAREA

const cuerpoTabla = document.getElementById("cuerpo-tabla");

cuerpoTabla.addEventListener("click", async (event) => {
    const elemento = event.target;

    if (
        elemento.tagName == "BUTTON" &&
        elemento.className.includes("btn-finalizar")
    ) {
        const id = elemento.dataset.id;

        const tarea = gestorTareas.obtenerTareaPorId(id);

        //VALIDAMOS QUE SI TAREA YA ESTÁ FINALIZADA NO SE VUELVA A FINALIZAR...
        if (tarea.estado) return;

        if (!tarea) return alert("Tarea no encontrada, actualice la página...");

        let confirmacion = await alertConfirmacion(
            `Está seguro que desea finalizar la tarea: ${tarea.descripcion}`,
        );

        if (!confirmacion) return;

        gestorTareas.finalizarTarea(id);

        const tareas = await gestorTareas.obtenerTareas();

        alertExito("Tarea finalizada con éxito...");
        cargarTareasTabla(tareas);
    }
});

//EVENTO ELIMINAR TAREA
cuerpoTabla.addEventListener("click", async (event) => {
    const elemento = event.target;

    if (
        elemento.tagName == "BUTTON" &&
        elemento.className.includes("btn-eliminar")
    ) {
        const id = elemento.dataset.id;
        const tarea = gestorTareas.obtenerTareaPorId(id);

        let confirmacion = await alertConfirmacion(
            `Está seguro que desea eliminar la tarea: ${tarea.descripcion}`,
        );

        if (!confirmacion) return;

        gestorTareas.eliminarTarea(id);

        const tareas = await gestorTareas.obtenerTareas();

        alertExito("Tarea eliminada con éxito...");

        cargarTareasTabla(tareas);
    }
});

document.addEventListener("DOMContentLoaded", async () => {
    const tareas = await gestorTareas.obtenerTareas();
    setTimeout(()=> {
        cargarTareasTabla(tareas);  
    }, 1000);
    
});

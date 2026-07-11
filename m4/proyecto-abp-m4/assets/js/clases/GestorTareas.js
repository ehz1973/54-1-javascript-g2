import Tarea from "./Tarea.js";
import { getDataTareas, getDataApi  } from "../utils/getData.js";

class GestorTareas {
    constructor() {
        this.tareas = [];
    }

    // C - Create: Añadir una nueva tarea
    crearTarea(descripcion) {
        if (!descripcion || descripcion.trim() === "") {
            throw new Error("La descripción no puede estar vacía.");
        }
        const nuevaTarea = new Tarea(descripcion);
        this.tareas.push(nuevaTarea);
        this.#guardarEnLocalStorage();
        return nuevaTarea;
    }

    // R - Read: Obtener todas las tareas o una por su ID
    async obtenerTareas() {
        await this.#leerLocalStorage();
        return this.tareas.reverse();
    }

    obtenerTareaPorId(id) {
        return this.tareas.find((tarea) => tarea.id === id) || null;
    }

    // U - Update: Actualizar el estado
    finalizarTarea(id) {
        const tarea = this.obtenerTareaPorId(id);
        tarea.estado = true;
        this.#guardarEnLocalStorage();
        return tarea;
    }

    // D - Delete: Eliminar una tarea por ID
    eliminarTarea(id) {
        const indice = this.tareas.findIndex((tarea) => tarea.id === id);
        if (indice === -1) {
            console.warn(
                `No se pudo eliminar: Tarea con ID ${id} no encontrada.`,
            );
            return false;
        }
        this.tareas.splice(indice, 1);
        this.#guardarEnLocalStorage();
        return true;
    }


    tareasTotal(){
        return this.tareas.length;
    }

    tareasPendientes(){
        return this.tareas.filter(tarea => !tarea.estado).length;
    }

    tareasFinalizadas(){
        return this.tareas.filter(tarea => tarea.estado).length;
    }


    //FUNCIONES PRIVADAS.
    #guardarEnLocalStorage() {
        localStorage.setItem("tareas", JSON.stringify(this.tareas));
    }

    async #leerLocalStorage() {
        const tareas = localStorage.getItem("tareas");

        if (tareas) {
            this.tareas = JSON.parse(tareas);
        } else {
            // this.tareas = await getDataTareas("tareas.json");
            this.tareas = await getDataApi(15);
        }
    }
}

export default GestorTareas;

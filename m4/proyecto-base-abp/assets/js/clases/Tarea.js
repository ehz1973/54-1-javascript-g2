import { generarId, obtenerFechaActual } from "../utils.js";

//id, titulo, descripcion, estado, fechaCreacion

const listaTareas = [];

class Tarea {
    constructor(titulo, descripcion) {
        this.id = generarId();
        this.estado = false;
        this.fechaCreacion = obtenerFechaActual();
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    //MÉTODOS DE INSTANCIA
    crear() {
        listaTareas.push(this);
        return true;
    }

    estadoStr() {
        if (this.estado) {
            return "Finalizado";
        } else {
            return "Pendiente";
        }
    }

    eliminar() {
        let indiceTarea = listaTareas.findIndex((tarea) => tarea.id == this.id);
        listaTareas.splice(indiceTarea, 1);
        return true;
    }

    //MÉTODOS ESTÁTICOS

    static obtenerTareas() {
        return listaTareas;
    }

    static obtenerTareaPorId(id) {
        return listaTareas.find((tarea) => tarea.id == id);
    }
}

const t1 = new Tarea("Tarea 1", "Comprar materiales.");
const t2 = new Tarea("Tarea 2", "Arrendar maquinaría.");

t1.crear();
t2.crear();

export default Tarea;

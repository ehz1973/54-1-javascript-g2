let tareas = [];

//CREAR PERSISTENCIA EN LOCALSTORAGE
const persistirTareasEnStorage = () => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
};

const leerTareasDeStorage = () => {
    let tareasStorage = localStorage.getItem("tareas");

    if (tareasStorage) {
        tareasStorage = JSON.parse(tareasStorage);
        tareasStorage = tareasStorage.map(
            (tarea) => new Tarea(tarea.titulo, tarea.descripcion, tarea.estado),
        );
        tareas = tareasStorage;
        return tareasStorage;
    } else {
        return tareas;
    }
};

class Tarea {
    constructor(titulo, descripcion, estado = false) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
    }

    //MÉTODOS DE INSTANCIA
    crear() {
        tareas.push(this);
        persistirTareasEnStorage();
    }

    //LOS MÉTODOS ESTÁTICOS PERMITEN SER EJECUTADOS SIN CREAR INSTANCIAS
    static buscarTodos() {
        return leerTareasDeStorage();
    }
}

export default Tarea;

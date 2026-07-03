class Persona {
    //AQUÍ SE DEFINEN LOS ATRIBUTOS / PROPIEDADES
    constructor(nombre, apellido, run) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.run = run;
    }

    //MÉTODOS / ACCIONES / FUNCIONES / COMPARTIMIENTOS
    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    }
}

//CREAMOS LOS OBJETOS / INSTANCIAS DE UNA CLASE

const persona1 = new Persona("Marta", "Villa", "1-1");

console.log("Nombre:", persona1.nombre);
console.log("Apellido:", persona1.apellido);
console.log("Nombre completo:", persona1.nombreCompleto());

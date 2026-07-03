class Persona {
    //AQUÍ SE DEFINEN LOS ATRIBUTOS / PROPIEDADES
    constructor(nombre, apellido, run) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.run = run;
    }

    //MÉTODOS / ACCIONES / FUNCIONES / COMPARTIMIENTOS
    nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }

    tipo() {
        return "Persona";
    }
}

class Empleado extends Persona {
    constructor(nombre, apellido, run, sueldo, cargo) {
        super(nombre, apellido, run);
        this.sueldo = sueldo;
        this.cargo = cargo;
    }

    aumentarSueldo(monto) {
        this.sueldo += monto;
        return this.sueldo;
    }

    tipo() {
        return "Empleado";
    }
}

class Cliente extends Persona {
    constructor(nombre, apellido, run, puntos = 0) {
        super(nombre, apellido, run);
        this.puntos = puntos;
    }

    agregarPuntos(cantidad) {
        this.puntos += cantidad;
        return this.puntos;
    }

    tipo() {
        return "Cliente";
    }
}

const p1 = new Persona("Pedro", "Soto", "1-1");
const c1 = new Cliente("Marta", "Figueroa", "2-2", 5000);
const e1 = new Empleado("Carlos", "Pereira", "3-3", 850_000, "Vendedor");

const listaPersonas = [p1, c1, e1];

for (const persona of listaPersonas) {
    console.log("Nombre:", persona.nombreCompleto());
    console.log("Tipo:", persona.tipo());
    console.log("*".repeat(50));
}

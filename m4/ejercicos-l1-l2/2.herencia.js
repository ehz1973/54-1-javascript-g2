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
}

//INSTANCIAS / OBJETOS

const cliente1 = new Cliente("Pedro", "Soto", "1-1", 5000);

console.log("Cliente:", cliente1.nombreCompleto());
console.log("Nuevos puntos:", cliente1.agregarPuntos(3000));


const empleado1 = new Empleado("Miguel", "Oviedo", "2-2", 860_000, "Administrativo");

console.log("Emplado:", empleado1.nombreCompleto());
console.log("Nuevo sueldo:", empleado1.aumentarSueldo(30_000));

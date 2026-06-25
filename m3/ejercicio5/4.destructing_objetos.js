function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const persona1 = new Persona("Carlos", "Villegas", 40);

//DESTRUCTURING

let { nombre, apellido, edad} = persona1;

console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Edad:", edad);
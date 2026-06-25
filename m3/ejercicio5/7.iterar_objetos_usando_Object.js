function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

//CREAMOS MÉTODOS O COMPORTAMIENTOS A NUETROS OBJETOS...
Persona.prototype.saludar = function () {
    return "Hola, soy " + this.nombre;
};

const persona1 = new Persona("Carlos", 40);

//OBTENER LAS LLAVES DE UN OBJETO

console.log("USANDO Object.keys()");
const llaves = Object.keys(persona1); //devuelve un array con las llaves

console.log("Llaves:", llaves);
console.log("*".repeat(50));
//OBTENER LOS VALORES DE UN OBJETO

console.log("USANDO Object.values()");
const valores = Object.values(persona1); //devuelve un array con los valores

console.log("Valores:", valores);
console.log("*".repeat(50));

//OBTENER LAS ENTRADAS DE UN OBJETO (llaves y valores)
console.log("USANDO Object.entries");
const entradas = Object.entries(persona1); //devuele una matriz con las laves y valores
console.table(entradas);
for (const entrada of entradas) {
    let [llave, valor] = entrada;
    console.log(llave, ":", valor);
}

//.unshift() -> PERMITE AGREGAR UN NUEVO ELEMENTO PERO AL PRINCIPIO DE LA LISTA

const  personas = ["Pedro", "Juan", "Diego", "Ana"];

let nuevaCantidad = personas.unshift("Mario", "Jorge");

console.log("Nueva cantidad:", nuevaCantidad);
console.table(personas);
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

//CREAMOS MÉTODOS O COMPORTAMIENTOS A NUETROS OBJETOS...
Persona.prototype.saludar = function () {
    return "Hola, soy " + this.nombre;
};

const persona1 = new Persona("Carlos", 40);

console.log(persona1);
console.log(persona1.saludar());

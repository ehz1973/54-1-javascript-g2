class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }

    saludar(){
        console.log("Mi nombre es", this.nombre);
    }
}

const persona1 = new Persona("Carlos");
persona1.saludar();

console.log(persona1); // OUTPUT; Persona { nombre: 'Carlos' }

let personaJson = JSON.stringify(persona1);

console.log(personaJson); //OUTPUT: {"nombre":"Carlos"}

let personaJs = JSON.parse(personaJson)
console.log(personaJs); //OUTPUT: { nombre: 'Carlos' }
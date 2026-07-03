const persona = {
    nombre: "Pedro",
    apellido: "Ramiro",
    notas: [3,5,6,7,8],
    direccion: {
        calle: "Calle 1",
        numero: "a-25",
        comuna: "Macul",
        ciudad: "Santiago"
    },
    saludar(){
        return `Hola, mi nombre es ${this.nombre} ${this.apellido}`;
    }
};

console.log("Nombre: ", persona.nombre); // notación de punto
console.log("Apellido: ", persona["apellido"]); // notación de corchetes

console.log(persona.saludar());


const personas = [
    {id:1, nombre: "Pedro", edad: 45},
    {id:2, nombre: "Marcela", edad: 60},
    {id:3, nombre: "Juan", edad: 70},
];

const mayores65 = personas.filter(persona => persona.edad >=65);

console.log(mayores65);
const persona = {
    nombre: "Pedro",
    apellido: "Soto",
    email: "pedro@gmail.com",
    edad: 35,
    vip: true,
    puntos: 0,
    nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;;
    },
};

console.log(persona);

//ACCEDER A LOS VALORES -> a través de las llaves (keys)

console.log("Nombre:", persona.nombre); //NOTACIÓN DE PUNTO
console.log("Apellido:", persona["apellido"]); //NOTACIÓN DE CORCHETES
console.log("Nombre completo:", persona.nombreCompleto());

//MODIIFCAR LOS DATOS DE UNA CLAVE
persona.vip = false;
persona["puntos"] += 300;
console.log(persona);
const  personas = ["Pedro", "Juan", "Diego", "Ana"];


//USANDO FUNCION REGULAR -> ES5
// personas.forEach(function(persona){
//     console.log(persona);
// });

//USANDO ARROW FUNCTION -> ES6+
personas.forEach((persona, index) => {
    console.log(index, " -> ", persona);
});
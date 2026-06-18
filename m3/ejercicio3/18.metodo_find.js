const  personas = ["Pedro", "Juan", "Diego", "Ana"];


let personaBuscada = "Diego";

let foundPersona = personas.find((persona) => persona == personaBuscada);

if(foundPersona){
    console.log("Se encontro a: ", foundPersona);
}else{
    console.log("no existen coincidencias.");
}
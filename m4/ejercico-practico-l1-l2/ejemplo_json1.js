let persona = {
    nombre: "Carlos",
};

const personaJson = JSON.stringify(persona)

console.log(personaJson);

console.log(JSON.parse(personaJson));
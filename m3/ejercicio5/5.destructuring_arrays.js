const participantes = [
    "participante 1",
    "participante 2",
    "particiante 3",
    "particiante 4",
];

let [primerLugar, segundoLugar, ...resto] = participantes;

console.log("Primer lugar:", primerLugar);
console.log("Segundo lugar:", segundoLugar);

console.log("No clasificados:", resto);

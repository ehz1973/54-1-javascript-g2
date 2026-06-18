//UTILIZAR UN FOR PARA FILTAR , SUMAR, CONTAR, ACUMULAR

let cantidadPares = 0; //CONTADOR
let cantidadImpares = 0;
let sumaPares = 0; //ACUMULAR
let sumaImpares = 0;

for (let numero = 0; numero <= 10; numero++) {
    
    let resto = numero % 2;

    if(resto == 0){
        cantidadPares++; //INCREMENTE 1 EN 1
        sumaPares += numero;
    }else {
        cantidadImpares++;
        sumaImpares += numero;
    }

}

console.log("Cantidad pares:", cantidadPares);
console.log("Suma pares:", sumaPares);
console.log("*".repeat(50));
console.log("Cantidad impares:", cantidadImpares);
console.log("Suma impares:", sumaImpares);
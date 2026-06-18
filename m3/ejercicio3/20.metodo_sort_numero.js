let numeros = [1,3,2,5,6,2,10,22,7,33,61,4,71,8];

//console.log(numeros.sort()); //NO USAR PARA LOS NÚMEROS

//ORDEN ASCENDENTE
numeros.sort((a, b) => a - b);

console.log("Orden ASC:", numeros);


//ORDEN DESCENENTE -> reverse / invertir el orden de a y b
numeros.sort((a, b) => b - a);
console.log("Orden DESC:", numeros);
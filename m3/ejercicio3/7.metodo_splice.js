// .splice() -> PERMITE ELIMINAR O REEMPLAZAR O AGREGAR NUEVOS ELEMENTOS DESDE UNA POSICIÓN X
const meses = ["Enero", "Febrero", "Marzo", "Mayo", "Junio"];

//PRIMER VALOR: ÍNDICE INICIAL (UBICACIÓN)
//SEGUNDO VALOR: ELEMENTOS A ELIMINAR
//TERCER VALOR: ELEMENTOS QUE QUEREMOS AGREGAR

meses.splice(3, 0, "Abril");

console.log(meses);

//EJEMPLO DE REEMPLAZO
let dias = ["Lunes", "Martes", "Martes", "Jueves", "Viernes"];

dias.splice(2, 1, "Miércoles");
//dias[2] = "Miércoles";

console.log(dias);
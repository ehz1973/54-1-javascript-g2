class Transaccion {
    //AQUÍ VAMOS A DEFINIR LAS PROPIEDADES
    constructor(id, glosa = "", monto = 0, fecha = "", ingreso = true) {
        this.id = id;
        this.glosa = glosa;
        this.monto = monto;
        this.fecha = fecha;
        this.ingreso = ingreso; //por defecto true -> ingreso / false -> egreso
    }
    //AQUÍ VAMOS A DEFINIR LOS MÉTODOS

    montoStr() {
        return this.monto.toLocaleString("es-CL");
    }
}

const t1 = new Transaccion(1, "Compra en línea", 75_000, "04/06/2026", false);
const t2 = new Transaccion(2, "Depósito", 10_000, "04/06/2026", true);

const transaccionesDB = [t1, t2];


console.log(transaccionesDB);

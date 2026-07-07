export const generarId = () => {
    const idUnico = crypto.randomUUID();
    return idUnico;
};

export const obtenerFechaActual = () => {
    const fechaActual = new Date();
    const dia = String(fechaActual.getDate()).padStart(2, "0");
    const mes = String(fechaActual.getMonth() + 1).padStart(2, "0"); // Enero es 0
    const ano = fechaActual.getFullYear();

    const fechaManual = `${dia}/${mes}/${ano}`;

    return fechaManual;
};
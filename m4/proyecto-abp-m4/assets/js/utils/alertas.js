export const alertConfirmacion = async (mensaje) => {
    return Swal.fire({
        title: mensaje,
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
    }).then((result) => {
        if (result.isConfirmed){
            return true;
        }{
            return false;
        }
    });
};

export const alertExito = (mensaje) => {
    Swal.fire({
        title: mensaje,
        icon: "success",
        draggable: true,
    });
};

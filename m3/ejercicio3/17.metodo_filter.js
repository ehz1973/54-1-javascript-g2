const  productos = ["Televisor Samsung", "Lavadora LG", "PC Dell", "Televisor Hisense"];

let productoBuscado = "lg";

let productosFiltrados = productos.filter(producto =>{
    let productoLower = producto.toLowerCase();
    productoBuscado = productoBuscado.toLowerCase();

    if(productoLower.includes(productoBuscado)){
        return producto;
    }
});


if(productosFiltrados.length > 0){
    console.log("Se encontraron los siguientes elementos:");
    console.log(productosFiltrados);
}else {
    console.log("No se encontraron coincidencias");
}
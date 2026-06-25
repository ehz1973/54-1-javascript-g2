const persona = {
    nombre: "Pedro",
    apellido: "Soto",
    email: "pedro@gmail.com",
    edad: 35,
    vip: true,
    puntos: 0,
    nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    },
};

for (const llave in persona) {
    console.log(llave, ":", persona[llave]);
}

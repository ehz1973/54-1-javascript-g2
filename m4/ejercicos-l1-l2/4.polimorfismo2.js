class Personaje {
    constructor(vida = 100, ataque = 100, defensa = 100, velocidad = 100) {
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
    }

    avanzar() {
        throw new Error("Se debe implementar el método avanzar...");
    }

    retroceder() {
        throw new Error("Se debe implementar el método retroceder...");
    }
}

class Ninja extends Personaje {
    constructor(vida = 70, ataque = 50, defensa = 150, velocidad = 250) {
        super(vida, ataque, defensa, velocidad);
    }

    avanzar() {
        let velocidadAvance = this.velocidad / 5;
        console.log("Velocidad de movimiento de avance:", velocidadAvance);
    }

    retroceder() {
        let velocidadAvance = this.velocidad / 10;
        console.log("Velocidad de movimiento de retroceso:", velocidadAvance);
    }
}

class Samurai extends Personaje {
    constructor(vida = 150, ataque = 150, defensa = 150, velocidad = 30) {
        super(vida, ataque, defensa, velocidad);
    }

    avanzar() {
        let velocidadAvance = this.velocidad / 5;
        console.log("Velocidad de movimiento de avance:", velocidadAvance);
    }

    retroceder() {
        let velocidadAvance = this.velocidad / 10;
        console.log("Velocidad de movimiento de retroceso:", velocidadAvance);
    }
}

console.log("Movimientos ninja");
const ninja1 = new Ninja();
ninja1.avanzar();
ninja1.retroceder();

console.log("Movimientos Samurai");
const samurai1 = new Samurai();
samurai1.avanzar();
samurai1.retroceder();

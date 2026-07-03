class Personaje {
    constructor(nombre, vida = 100, ataque = 100, defensa = 100, velocidad = 100) {
        this.nombre = nombre;
        this.vidaMax = vida;
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

    // Fórmula de daño base equilibrada
    calcularDanoBase(objetivo) {
        let dano = this.ataque - (objetivo.defensa / 5);
        return Math.max(5, Math.round(dano)); // Al menos hace 5 de daño
    }

    recibirDano(cantidad) {
        this.vida -= cantidad;
        if (this.vida < 0) this.vida = 0;
        console.log(`💥 ¡${this.nombre} recibe ${cantidad} de daño! (Vida restante: ${this.vida}/${this.vidaMax})`);
    }

    estaVivo() {
        return this.vida > 0;
    }
}

class Ninja extends Personaje {
    // Stats equilibrados: Mucha velocidad, ataque moderado, defensa baja pero vida decente
    constructor(nombre, vida = 110, ataque = 45, defensa = 60, velocidad = 180) {
        super(nombre, vida, ataque, defensa, velocidad);
    }

    avanzar() {
        let velocidadAvance = this.velocidad / 5;
        console.log(`🏃‍♂️ ${this.nombre} avanza rápidamente a velocidad: ${velocidadAvance}`);
    }

    retroceder() {
        let velocidadRetroceso = this.velocidad / 10;
        console.log(`💨 ${this.nombre} se desvanece hacia atrás a velocidad: ${velocidadRetroceso}`);
    }

    // Ataque básico
    ataqueRapido(objetivo) {
        console.log(`⚔️ ${this.nombre} lanza un Ataque Rápido con sus kunais a ${objetivo.nombre}!`);
        let dano = this.calcularDanoBase(objetivo);
        objetivo.recibirDano(dano);
    }

    // Movimiento Especial (Multiplica el daño por agilidad)
    ataqueEstrella(objetivo) {
        console.log(`✨ ¡${this.nombre} ejecuta su técnica secreta: Jutsu de Sombras!`);
        let dano = Math.round(this.calcularDanoBase(objetivo) * 1.5);
        objetivo.recibirDano(dano);
    }
}

class Samurai extends Personaje {
    // Stats equilibrados: Mucha vida y ataque, defensa sólida, pero muy lento
    constructor(nombre, vida = 160, ataque = 60, defensa = 100, velocidad = 50) {
        super(nombre, vida, ataque, defensa, velocidad);
    }

    avanzar() {
        let velocidadAvance = this.velocidad / 5;
        console.log(`🐢 ${this.nombre} avanza firmemente a velocidad: ${velocidadAvance}`);
    }

    retroceder() {
        let velocidadRetroceso = this.velocidad / 10;
        console.log(`🛡️ ${this.nombre} retrocede cubriéndose a velocidad: ${velocidadRetroceso}`);
    }

    // Ataque básico
    corteKatana(objetivo) {
        console.log(`🗡️ ${this.nombre} realiza un Corte de Katana directo a ${objetivo.nombre}!`);
        let dano = this.calcularDanoBase(objetivo);
        objetivo.recibirDano(dano);
    }

    // Movimiento Especial (Golpe pesado)
    impactoIai(objetivo) {
        console.log(`🔥 ¡${this.nombre} concentra su fuerza y desenvaina en un Impacto Iai destructivo!`);
        let dano = Math.round(this.calcularDanoBase(objetivo) * 1.8);
        objetivo.recibirDano(dano);
    }
}

// ==========================================
// SIMULACIÓN DEL COMBATE EN CONSOLA
// ==========================================

function simularCombate() {
    const ninja = new Ninja("Hanzo");
    const samurai = new Samurai("Musashi");

    console.log("==========================================");
    console.log("⚔️ ¡COMIENZA EL DUELO DE LEYENDAS! ⚔️");
    console.log(`🥷 ${ninja.nombre} (Ninja) vs 🏯 ${samurai.nombre} (Samurai)`);
    console.log("==========================================");

    // Determinar orden de turnos inicial por velocidad
    let turno = 1;
    let primerAtacante = ninja.velocidad >= samurai.velocidad ? ninja : samurai;
    let segundoAtacante = primerAtacante === ninja ? samurai : ninja;

    while (ninja.estaVivo() && samurai.estaVivo()) {
        console.log(`\n--- 🗓️ TURNO ${turno} ---`);

        // --- ACCIÓN DEL JUGADOR 1 (Más veloz) ---
        if (primerAtacante.estaVivo()) {
            primerAtacante.avanzar();
            // Decisión aleatoria de ataque (70% básico, 30% especial)
            if (Math.random() > 0.3) {
                primerAtacante instanceof Ninja ? primerAtacante.ataqueRapido(segundoAtacante) : primerAtacante.corteKatana(segundoAtacante);
            } else {
                primerAtacante instanceof Ninja ? primerAtacante.ataqueEstrella(segundoAtacante) : primerAtacante.impactoIai(segundoAtacante);
            }
        }

        // Verificar si el combate terminó
        if (!segundoAtacante.estaVivo()) break;

        console.log(""); // Espacio visual

        // --- ACCIÓN DEL JUGADOR 2 ---
        if (segundoAtacante.estaVivo()) {
            segundoAtacante.retroceder();
            if (Math.random() > 0.3) {
                segundoAtacante instanceof Ninja ? segundoAtacante.ataqueRapido(primerAtacante) : segundoAtacante.corteKatana(primerAtacante);
            } else {
                segundoAtacante instanceof Ninja ? segundoAtacante.ataqueEstrella(primerAtacante) : segundoAtacante.impactoIai(primerAtacante);
            }
        }

        turno++;
    }

    console.log("\n==========================================");
    console.log("💀 EL COMBATE HA TERMINADO 💀");
    if (ninja.estaVivo()) {
        console.log(`🏆 ¡El Ninja ${ninja.nombre} se alza con la victoria! 🎉`);
    } else {
        console.log(`🏆 ¡El Samurai ${samurai.nombre} se alza con la victoria! 🎉`);
    }
    console.log("==========================================");
}

// Ejecutar la simulación
simularCombate();
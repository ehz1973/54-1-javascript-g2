class CuentaBancaria {
    #saldo;
    constructor(saldo = 0) {
        this.#saldo = saldo;
    }

    //MÉTODOS GETTERS
    verSaldo() {
        return this.#saldo;
    }

    //SETTER

    depositar(monto) {
        monto = Number(monto);
        if (isNaN(monto)) {
            throw new Error(
                "Se ha intentado ingresar un valor no númerico a la función depositar. ",
            );
        }

        if (monto <= 0) {
            throw new Error(
                "Ha intentado ingresar valores iguales o inferior a cero, debe ingresar valores mayores a 1.",
            );
        }

        this.#saldo += monto;
    }

    retirar(monto) {
        if (monto > 0 && monto <= this.#saldo) {
            this.#saldo -= monto;
        } else {
            throw new Error(
                "Ha intenta retirar un monto mayor al saldo disponible o monto a retirar es menor o igual a 0",
            );
        }
    }
}

const cuenta1 = new CuentaBancaria(100_000);

cuenta1.depositar(3000);
cuenta1.depositar(50000);
cuenta1.retirar(25_000);

console.log(cuenta1.verSaldo());
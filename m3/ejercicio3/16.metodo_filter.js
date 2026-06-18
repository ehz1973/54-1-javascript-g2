const  sueldos = [400_000, 500_000, 800_000, 600_000, 1_000_000, 450_000];


let menorIgual500Mil = sueldos.filter(sueldo => sueldo <= 500_000);

console.log(menorIgual500Mil);

let totalSueldosMenorIgual500Mil = 0;

for (const sueldo of menorIgual500Mil) {
    totalSueldosMenorIgual500Mil+= sueldo;
}

console.log("Suma de sueldos menores o igual a 500 mil", totalSueldosMenorIgual500Mil);


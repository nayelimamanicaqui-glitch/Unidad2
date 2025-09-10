// RETO
// Crea un programa que pida un numero entero al usuario e
// indique si este numero es par o no.

let numero = parseInt(prompt("Ingresa un número entero:"));

if (isNaN(numero)) {
    console.log("Eso no es un número válido.");
} else if (numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número no es par.");
}



console.log("Hola");
/* arrays - arreglos 
estructura de datos , las estructuras se llaman asi porque perminten almacenar un dato 
Un array es : Ordenado , indexable e iterable

Sintaxis 
let nombreArray =[1, ' hola ']

*/
// crea un arreglo que guarde los nueros del 1 al 10 
let numbers =[1,2,3,4,5,6,7,8,9,10];
console.log(numbers);
let size=numbers.length;

console.log(`El tamaño del array es ${numbers.length}`);
console.log(`Primer elemento del arreglo: ${numbers[0]}`);
console.log(`Último elemento del arreglo: ${numbers[numbers.length - 1]}`);
//Reto
let fruits= ["papaya", "manzana", "personalbar", "uva"];
console.log(fruits);

//bucles//

let num1=18;
console.log(num1);
num1=num1+1;
console.log(num1);


num1+=5;
console.log(num1);

num1-=1;
console.log(num1);

num1+=1;
console.log(num1);



console.log("NÚMEROS DEL 0 AL 26, DE 3 EN 3");

for (let i = 0; i <= 26; i += 3) {
  console.log(i);
}

console.log("Numeros del 1 al 10");

let iterator = 1
while (iterator <= 10) {
    //Mostramos el número
    console.log(iterator);
    //Al final, aumentamos nuestro iterador
    iterator++;
}

//RETO: Mostrar los números del 15 al 75, de 5 en 5. Con bucle while
console.log("Números del 15 al 75, de 5 en 5");

let bucleWhile = 15
while (bucleWhile <= 75) {
    console.log(bucleWhile);
    bucleWhile += 5;
}
/*do...while -> Bucle infinito muy parecido a while, la diferencia es que este si o si, siempre ejecuta el código al menos una vez y luego empieza a evaluar la condición 

Sintaxis:

do {
    //Código del bucle
} while (condición); */

let doWhile = 14;

do {
    //Mostramos el número
    console.log(doWhile);
    //Al final, aumentamos nuestro iterador
    iterator++;
} while (doWhile <= 10);

//No importa si no se cumple la condición, de todas formas se ejecuta al menos una vez

/* iTERAR: -> Recorrer

Por eso si decimos que algo es iterable, significa que se puede recorrer sus elementos
*/

console.log("Iterar un arreglo");

let words = ["wiesse", "lima", "grau", "pte. nuevo", "penal"]
console.log(words);

/*Índice de inicio -> 0
Índice final -> array.length - 1
Actualización de los índices -> 1 en 1

//Interar sobre el arreglo words */
for (let i = 0; i <= words.length - 1; i++) {
    console.log(words[i]);
}

/* INVERTIR UN ARREGLO */
let auxWords = [];
for (let i = words.length - 1; i >= 0; i--) {
    auxWords.push(words[i]);
}
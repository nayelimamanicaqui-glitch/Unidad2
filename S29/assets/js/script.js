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

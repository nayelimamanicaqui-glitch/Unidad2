//Metodo arrays
let fruits = [ "Manzana","Pera","Uva"];
console.log(fruits);
console.log("push");
//push
fruits.push("Mango");

//verificamos
console.log(fruits);
console.log("pop");

//pop
let lastitem= fruits.pop();
console.log(fruits);

console.log("unshift");
//unshift
fruits.unshift("mango");
console.log(fruits);

console.log("shift");
//shift
fruits.shift();
console.log(fruits);
console.log("includes");
//incluides
console.log(fruits.includes("Fresa"));
console.log(fruits.includes("Pera"));

console.log("indexOf");
//indexof si no lo encuentra , retorna -1
console.log(fruits.indexOf("Naranja"));
console.log(fruits.indexOf("Pera"));
console.log(fruits.indexOf("Manzana"));

console.log("join");
//join
let fruitsString=fruits.join();
console.log(fruitsString);

//indicamos otro caracter
console.log(fruits.join("."));
console.log(fruits.join("-"));
console.log(fruits.join("/"));
console.log(fruits.join("Fruta - "));

//Vuelve todo a STRING
let randomArray=[ 12,1,2,"hola",true,"Palabra"];
console.log(randomArray.join());

console.log("=================");
// recalcando el arreglo
fruits = [ "Manzana","Pera","Banana","uva","fresa"];
console.log("ARREGLO ORIGINAL");
console.log(fruits);

console.log("slice");
//slice
//corta desde el indice 3 hasta el final
let sliceFruits=fruits.slice(3);
console.log(sliceFruits);
console.log(fruits);

//agregando una argumento de fin
console.log(fruits.slice(1,4));
fruits=[ "Manzana","Naranja", "Pera","Uva"];
//splice
fruits.splice(2,3,"sandia","cereza","aguaymanto"),
console.log(fruits);

console.log("==========================");
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(nums);

// map(function)
let numsMap = nums.map((x) => x * 2);
console.log(numsMap);

let numsToString = nums.map((x) => `Número ${x}`);
console.log(numsToString);

// filter(function) 
let filteredNums = nums.filter((x) => x % 2 === 0);
console.log(filteredNums);
// reduce(funcion, acumulador) 

let sumOfAllElements = nums.reduce((a, b) => a + b, 0);
console.log(sumOfAllElements);

let productOfAllElements = nums.reduce((a, b) => a * b, 1);
console.log(productOfAllElements);

console.log("========================");
console.log("Objeto Math");

console.log(" Math.round()");
//Math.round(x)
console.log(Math.round(14,3));
console.log(Math.round(14,8));

console.log("Math.ceil()");
//Math.ceil(x)
console.log(Math.ceil(14.3));

console.log("Math.floor()");
//Math.floor(x)
console.log(Math.floor(14.8));


console.log('Hola Mundo');
let num1 = 8;
let num2 = 4;
console.log(num1);
console.log(num2);
//ahora lo sumamos//
console.log(num1 + num2);
//resultados//
console.log("RESULTADO DE SUMA");
let resultadoSuma = num1 + num2;
console.log(resultadoSuma);

//resta//
let minuendo = 9;
let sustraendo = 6;
let resta= minuendo - sustraendo;
console.log("RESULTADO DE RESTA");
console.log(resta);

//multiplicacion//
let factor1=20;
let factor2=20;
let producto = factor1 + factor2;

console.log("RESULTADO DE MULTIPLICACION");
console.log(producto);
// division//
let dividendo =28;
let divisor = 5;
let cociente =dividendo /divisor;

//opercion combinada//
console.log("OPERACION COMBINADA");
console.log( 15+43/(7+8));
// modulo //
let moduloNum1 =12;
let moduloNum2 =0;
let resultadoModulo =moduloNum1 % moduloNum2;

console.log("RESLTADO MODULO");
console.log(resultadoModulo);

let base =2;
let exponente =5;
let resultadoPotencia =base**exponente;

console.log("RESULTADO POTENCIA");
console.log(resultadoPotencia);
let valor1=8;
let valor2=1;

let mayorQue = valor1 > valor2;
console.log(mayorQue);
console.log(valor1 < valor2);
console.log(valor1 >= valor2);
console.log(valor1 <= valor2);

let datoNumber= 1;
let datoString= '1';

//igualdad//
console.log(datoNumber == datoString);
//identidad//
console.log(datoNumber === datoString);
// diferentes(!Negacion de la igualdad o identidad)
console.log(datoNumber!=datoString); //false
console.log(datoNumber !== datoString); //true

console.log("===========================")
console.log("OPERADORES LOGICOS");
/*
OPERADORES LOGICOS

Realizan operaciones logicas entre valores boolenos.

&& (y,AND)
|| (OR)
!(NOT)
*/


// AND
console.log("AND");
console.log(true && true);  // true
console.log(true && false);  // false
console.log(false && false);  // false
// OR
console.log("OR");
console.log(true || true);  // true
console.log(true || false);  // true
console.log(false || false);  // false
// NOT
console.log("NOT");
console.log(!true);  // false
console.log(!false);  // true
//STRING
//COMILLAS SIMPLES//
let simples ='String entre comillas simples';
console.log(simples);
//COMILLAS DOBLES//
let dobles="String entre comillas dobles";
console.log(dobles);

//backticks//
let backticks = `String entre backticks o comillas invertidas`;
console.log(backticks);
// INTERPOLAR STRINGS INGRESAR VARIABLES DENTRO DE LA STRING // $
let nombreCompleto ='Nayeli Mamani';
let edad =18;
let saludo =`Hola, me llamo ${nombreCompleto}! Tengo${edad}
años.`;
console.log(saludo);

//ESCRIBIR STRINGS EN MAS DE UNA SOLA LINEA
let frase =`Hola 
còmo
estas
`;
console.log(frase);
//metacaracteres - carcteres especiales//
frase= "Hola/ncòmo/nestas";
console.log(frase);

//escapar caracteres-caracter especial
// se escapa poniendo un backlash
let miguelGrau ="Miguel Grau/el caballero de los mares";
console.log(miguelGrau);

let prueba2= Its me ;
console.log(prueba2);

//INDEXACION
let palabra ="hola";
console.log(palabra);
console.log(indexando);

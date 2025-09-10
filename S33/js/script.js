/*Seleccionamos elementos del Dom gracias al 
objeto "Document" y algunos de sus metodos:

getElementById("nombre-id") -> Obtiene un 
elemento por su id
*/
let mainTitle = document.getElementById("main-title");
//Mostramos el elemento
console.log(mainTitle);
//Mostramos el contenido de mainTitle
console.log(mainTitle.innerText);
//Actualizamos el contenido dinámicamente
mainTitle.innerText = "Main title updated :3";
//Mostramos el contenido de mainTitle nuevamente
console.log(mainTitle.innerText);

/* getElementsByClassName("nombre-clase") -> Obtiene todos los
elementos por su clase
Esto devuelve un array, aunque solo sea un elemento.
*/
let mainTexts = document.getElementsByClassName("main-text");
console.log(mainTexts); //Esto es un array

//Accedemos a un elemento y mostramos su contenido
console.log(mainTexts[0].innerText);
mainTexts[0].innerText = "Main Paragraph one updated :3";
//getElementsByTagName("nombre-etiqueta") -> Obtiene todos los
//elementos por su etiqueta
let subtitles = document.getElementsByTagName("h2");
console.log(subtitles); //Esto es un array
console.log(subtitles[0].innerText);
console.log(subtitles[1].innerText);
console.log(subtitles[2].innerText);
/*
Selectores por CSS, se llaman así porque usan la
sintaxis de un elector CSS para seleccionar los elementos del DOM
querySelector("selector") -> Devuelve el primer elemento que
coincida con el selector.
querySelectorAll("selector") -> Devuelve todos los elementos
que coincidan con el selector.
 */
let queryMainTtile = document.querySelector("#main-title");
console.log(queryMainTtile);
// let mainTexts = document.getElementsByClassName("main-text");
let queryMainTexts = document.querySelectorAll(".main-text");
console.log(queryMainTexts);
//EVENTOS
console.log("EVENTOS");
/*
Selecciono un elemento y le agrego un evento. No es
necesario almaecenar el elemento en una variable.

[Seleccionar elemento].addEventListener("nombre-evento", 
función a ejecutar)
//Función a ejecutar cuando suceda ese evento
La función es una función anónima, es decir, no tiene
nombre, y se define en el momento.
*/
document.getElementById("main-button").addEventListener("click", function () {
  //CÓDIGO A EJECUTAR CUANDO SUCEDA EL EVENTO
  let mainButton = document.getElementById("main-button");
  console.log("Has hecho click en el botón");
  //Podemos cambiar estilos
  //  document.body.style.backgroundColor = "red";
  let currentBackGroundColor = document.body.style.backgroundColor;
  if (currentBackGroundColor != "lightblue") {
    document.body.style.backgroundColor = "lightblue";
    mainButton.style.color = "red";
  } else {
    document.body.style.backgroundColor = "pink";
    mainButton.style.color = "blue";
  }
  console.log(currentBackGroundColor);
  //Obtener el valor ingresado en un input
  //Primero seleccionamos el input
  let magicNumber = document.querySelector("#magic-number").value;
  console.log(`Valor ingresado en el input: ${magicNumber}
    `);
  //Accedemos a la propiedad value de un input

  //Mostramos el valor en el contenido de un elemento
  let greetParagraph = document.querySelector("#greet");
  greetParagraph.innerText = `Buenas noches ${magicNumber}`;
  if (magicNumber == "") {
    greetParagraph.innerText = "No has ingresado un nombre";
  }
});
//Evento de click en otro botón
//Seleccionamos el botón
let togglerButton = document.querySelector("#toggler");
let hiddenText = document.querySelector("#hidden-text");
hiddenText.style.display = "none"; //Ocultamos el texto
//Agregamos el evento
togglerButton.addEventListener("click", function () {
  //Actualizamos el estado actual antes de cambiarlo
  let currentTextDisplay = hiddenText.style.display;
  //Si el texto está oculto, lo mostramos
  if (currentTextDisplay == "none") {
    hiddenText.style.display = "block";
    togglerButton.innerText = "Ocultar texto";
  } else {
    //Si no está oculto, lo oculto
    hiddenText.style.display = "none";
    togglerButton.innerText = "Mostrar texto";
  }
});

//Forma correcta de cambiar estilos
//Usando clases de CSS
let togglerButton2 = document.querySelector("#toggler-2");
let hiddenText2 = document.querySelector(".hidden-text");

// Inicialmente oculto
hiddenText2.classList.add("hide-text");
togglerButton2.innerText = "Mostrar";

togglerButton2.addEventListener("click", function () {
  if (hiddenText2.classList.contains("hide-text")) {
    hiddenText2.classList.remove("hide-text");
    togglerButton2.innerText = "Ocultar";
  } else {
    hiddenText2.classList.add("hide-text");
    togglerButton2.innerText = "Mostrar";
  }
});
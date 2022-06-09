/*
Ejercicio 2

Dada una cadena de texto, comprobar si es un palindromo o no.
Los palindromos son palabras que se leen igual estando invertidas

EJEMPLOS:

ANA, OTTO, BOB, ANITALAVALATINA

No se deben tener espacios o silbolos raros.


Como hacerlo
-Función con parametro texto
-Separar el texto en un array de letras
-Darle la vuelta
-Unir el array de letras en un str y comparar con el parametro

*/

const palindromo2 = (texto) => {
  let invertido = texto.split("").reverse().join("");
  return invertido;
};

console.log(palindromo2("hola perro"));

const palindromo = (str) => {
  let invertido = str.split("").reverse().join("");

  return invertido === str;
};

// console.log(palindromo("otto"));

// var frase = prompt("Introduce texto").toLocaleLowerCase();

// var palabra = prompt(
//   "Introduce la palabra que desea buscar"
// ).toLocaleLowerCase();

// function Coincidencias(texto, palabra) {
//   var separada = texto.replace(",", " ").split(" ");

//   var contador = 0;
//   for (i = 0; i < separada.length; i++) {
//     if (palabra == separada[i]) {
//       contador++;
//     }
//   }

//   document.write(contador);
// }

// Coincidencias(frase, palabra);

// function buscarPalabra(palabra, frase) {
//   let nuevaFrase = frase.split(" ");
//   let contador = 0;

//   nuevaFrase.forEach((word) => {
//     if (word === palabra) {
//       contador += 1;
//     }
//   });

//   return `La palabra ${palabra} se encontro ${
//     contador >= 1 ? contador + " veces" : contador + " vez"
//   } en la frase`;
// }

// let frase = "Uno dos dos tres tres tres cuatro cuatro cuatro cuatro cinco";

// console.log(buscarPalabra("tres", frase));

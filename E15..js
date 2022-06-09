/*
Dada una cadena de texto, devolver el caracter más usado.

Ejemplo:

masUsado ("PsyshusDev es le mejor desarrolador de software del mundo prro")
Devuelve: Lo que más se repite es:

Como resolver:


Crear una función que reciba el texto

Mapear letraas en un json

Recorrer el mapeo

Hacemos condiciones para ver que contador es mayor

*/

// const masUsado = (texto) => {
//   let mapeoLetras = {};

//   let maximoRepeticiones = 0;

//   let letraMasRepetida = "";

//   for (let letra of texto) {
//     if (!mapeoLetras[letra]) {
//       mapeoLetras[letra] = 1;
//     } else {
//       mapeoLetras[letra]++;
//     }
//   }

//   for (let letra in mapeoLetras) {
//     if (mapeoLetras[letra] > maximoRepeticiones) {
//       maximoRepeticiones = mapeoLetras[letra];
//       letraMasRepetida = letra;
//       console.log(letraMasRepetida);
//     }
//   }
//   console.log(maximoRepeticiones, letraMasRepetida);
// };

// console.log(
//   masUsado("PsyshusDev es le mejor desarrolador de software del mundo prro")
// );

// function mostUsed(text) {
//   let result = "";
//   let max = 0;
//   const map = {};
//   text.split("").forEach((el) => {
//     map[el] = map[el] + 1 || 1;
//     if (max < map[el] && !el.includes(" ")) {
//       result = el;
//       max = map[el];
//     }
//   });
//   return `${result}: ${max}`;
// }
function masUsado(texto) {
  let textoLimpio = texto.split("").sort().join("").trim().toLowerCase();
  let newArray = textoLimpio.split("");
  let contador = 1;
  let sinRepetir = [];
  let vecesRepetidas = [];
  let respuesta = undefined;

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === newArray[i + 1]) {
      contador++;
    } else {
      sinRepetir.push(newArray[i]);
      vecesRepetidas.push(contador);
      contador = 1;
    }
  }

  for (let k = 0; k < sinRepetir.length; k++) {
    console.log(
      `El valor ${sinRepetir[k]} se repite ${vecesRepetidas[k]} veces`
    );
  }
  return respuesta;
}

console.log(masUsado("holas dfjf jdeññññññj"));

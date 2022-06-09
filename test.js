// function masUsado(texto) {
//   let textoLimpio = texto.split("").sort().join("").trim().toLowerCase();
//   let newArray = textoLimpio.split("");
//   let cuenta = 1;
//   let x = newArray[0];
//   var letras = [];
//   let conteo = [];

//   for (let i = 0; i < newArray.length; i++) {
//     if (x === newArray[i]) {
//       cuenta = cuenta + 1;
//     } else {
//       letras.push(x);
//       conteo.push(cuenta);
//       x = newArray[i];
//       cuenta = 1;
//     }
//   }
//   console.log(letras);
//   let max = Math.max(...conteo);
//   let posGanadora = conteo.indexOf(max);
//   let respuesta = `La letra que más se repite es: ${letras[posGanadora]} con ${max} repeticiones`;
//   return respuesta;
// }

// console.log(masUsado("aaaa l "));

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
// console.log(mostUsed("aaaaa j aha hg"));
const arr = [1, 2, 3, 4];
let suma = 0;

for (let i = 0; i < arr.length; i++) {
  suma += arr[i];
}
console.log(suma);

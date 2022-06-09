/* 

Dado un número, mostar los números de 1 hasta el número.
Pero para multiplos de 3, mostrar "buzz" en lugar del número y para multiplos de 5, mostrar "lightyear".
Para multiplos de 3 y 5, mostrar "buzzlightyear".


Como hacerlo:

-Crear una función que reciba el número
- Condiciones número actual multiplo de 3 o 5
-Crear funcion para recorrer y mostar
- Bucle del 1 al número
*/

const buzz = num => {
  let resultado = '';
  if (num % 3 === 0 && num % 5 === 0) {
    resultado = 'buzzlightyear';
  } else if (num % 3 === 0) {
    resultado = 'buzz';
  } else if (num % 5 === 0) {
    resultado = 'lightyear';
  } else {
    resultado = num;
  }
  return resultado;
};

const imprimir = num => {
  for (let i = 1; i <= num; i++) {
    console.log(buzz(i));
  }
};
imprimir(100);

// const buzz = function (numero) {
//   for (let i = 1; i <= numero; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('buzzlightyear');
//     } else if (i % 3 === 0) {
//       console.log('buzz');
//     } else if (i % 5 === 0) {
//       console.log('lightyear');
//     } else {
//       console.log(i);
//     }
//   }
// };

// console.log(buzz(100));

/* ENUNCIADO

Dado un número , devolver su tabla de mulyiplicar completa.

Ejemplos:

-Ejecuto esta funcion:

tablaDeMultiplicar(5)

-Me debe de devolver este resultado:

#Tabla del 5 #

1 X 5 = 5
2 X 5 = 10
3 X 5 = 15
4 X 5 = 20
5 X 5 = 25
6 X 5 = 30
7 X 5 = 35
8 X 5 = 40
9 X 5 = 45
10 X 5 = 50


Como resolverlo:
Funcion con parametro número
-Variable con texto encabezado
-Bucle del 1 al 10 
-Concatenar a la variable string con multiplicación y su resultado



*/

const tablaDeMultiplicar3 = (numero) => {
  let resultado = `La tabla de multiplicar del número ${numero}: \n`;
  for (let i = 1; i <= 10; i++) {
    let multiplicacion = i * numero;
    resultado += `${i} X ${numero} = ${multiplicacion} \n`;
  }
  return resultado;
};
console.log(tablaDeMultiplicar3(5));

/**
 *
 *
 * *
 * *
 * *
 * **
 *
 * **
 *
 * **
 *
 */

const tablaDeMultiplicar = (numero) => {
  let resultado = `Tabla de multiplicar del #${numero} \n`;
  for (let i = 0; i <= 10; i++) {
    let multiplicacion = i * numero;
    resultado = resultado + `${i} x ${numero} = ${multiplicacion} \n`;
  }
  return resultado;
};
// console.log(tablaDeMultiplicar(3));

const multi = (num) => {
  let respuesta = `La tabla de multiplicar del ${num} \n `;
  for (let i = 0; i <= 10; i++) {
    let multi = i * num;
    respuesta = respuesta + `${i} X ${num} = ${multi}\n`;
  }
  return respuesta;
};

// console.log(multi(9));

/*

Dado un número, mostrar todos sus divisores.


Ejemplos:

mostrarDivisores(3)

Resultado 

1
3


Pasos a seguir
-Crear una función que comprueba si un número es divisor de otro.
-Crear funcion para recorrer el número y mostar el resultado.
*/

const divisor = (numero, posiblesDivisores) => {
  if (numero % posiblesDivisores === 0) {
    return posiblesDivisores;
  }
  return 0;
};

const divisores = num => {
  for (let i = 1; i <= num; i++) {
    let esDivisor = divisor(num, i);
    if (esDivisor) {
      console.log(esDivisor);
    }
  }
};
divisores(182);

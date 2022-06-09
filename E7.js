/**
 Ejercicio 7

 Dados los números, devolver cuantos números Impares hay entre ellos


 Como resolverlo:

 -Función que reciba los dos números
 - Bucle de numero 1 al numero 2
 -Condicion, si el resto es distinto a cero, es impar.
 -Aunmentar en uno el contador
 -Devolver el contador 
 */

const impar = (num1, num2) => {
  let contador = 0;
  while (num1 < num2) {
    if (num1 % 2 !== 0) {
      contador++;
    }
    num1++;
  }

  return contador;
};
console.log(`Cantidad de números impares: ${impar(1, 15)}`);

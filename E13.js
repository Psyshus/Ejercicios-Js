/**
 * 
 * 
 * 
 * Dado un array, dividirlo en tantos sub-arrays como sea nercesario basandonos en un número que indique su tamaño.
 * 
 * 
 * Dividirlo en arrays de X elementos.
 * 
 * 
 * Ejemplos
  
Divide Array ([7,8,9,10,5,],2)


Devuelve:

[[7,8],[9,10,][5]]
 */

const divideArreglo = (arrayPrincipal, elementos) => {
  let arreglos = [];

  for (let elemento of arrayPrincipal) {
    let ultimo = arreglos[arreglos.length - 1];
    if (!ultimo || ultimo.length === elementos) {
      arreglos.push([elemento]);
    } else {
      ultimo.push(elemento);
    }
  }
  return arreglos;
};

console.log(divideArreglo([7, 8, 9, 10, 5], 2));

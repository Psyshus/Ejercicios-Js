/*
 Enunciado
 Dados dos arrays, devolver array con los elementos comunes entre ambos

 Ejemplo:

 [4,5,6,7,]
 [7,8,9,7,5]
 = devuelve [5,7]


 Como se resolveria:
 -Una función que recibe dos array como parametros
 -Filtrar el array y evaluar la condición
 Devolver el array nuevo
 */

const elementosComunes = (arry1, array2) => {
  const filtrado = arry1.filter((elemento) => {
    return array2.includes(elemento);
  });
  return filtrado;
};

console.log(elementosComunes([4, 5, 6, 7, 182], [7, 8, 9, 7, 5, 182]));

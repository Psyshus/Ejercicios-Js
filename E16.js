/*
Dada una cadena de texto, devolver cuantas vocales (a, e, i, o, u) hay en la cadena.

Como hacerlo:
-Crear una funcion que reciba el texto
- Metodo match con una expresion regular que busque las vocales
- Devolver el numero de vocales encontradas


*/
const vocales = texto => {
  let coincidsencias = texto.match(/[aeiou]/gi);
  return coincidsencias ? coincidsencias.length : 0;
};

console.log(vocales('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'));

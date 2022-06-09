/**
 

Dado un texto y una busqueda, censurar todas las coincidencias de la busqueda en el texto con [-CENSURADO-].

Si el texto y la busqueda están vacios mostar "No puedes leer el texto y la busqueda en el caso de que ambos parámetros no lleguen."


Ejemplos:


cencurado("HOLA HOLA" , "HOLA") // Devuleve: [-CENSURADO-] [-CENSURADO-]

Como hacerlo

Función que reciba un texto y una busqueda
Condición en el caso de que algun parametro de false
Reemplazar la busqueda por [-CENSURADO-] en el texto

 */

const censurado = (texto = false, busqueda = false) => {
  let resultado = "";

  if (!texto && !busqueda) {
    resultado = "No puedes leer el texto y realizar la búsqueda";
  }
  if (!texto && busqueda) {
    resultado = "No puedes leer el texto ";
  }

  if (texto && !busqueda) {
    resultado = "No puedes realizar la búsqueda";
  }

  if (texto && busqueda) {
    resultado = texto.replace(new RegExp(busqueda, "gi"), "[-CENSURADO-]");
  }
  return resultado;
};
console.log(censurado(""));
console.log(censurado("", "hola"));
console.log(censurado("holioo, como holi", "holi"));

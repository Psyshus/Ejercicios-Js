/*

Ejercico tres

Dada una palabra, buscarla en un afrase o texto y devolver cuantas veces aparece en el texto, la palabra debe de ser un parametro de la función.


Como hacerlo:

-Funcion con parametros, dos parametros, "Frase" y busqueda
-Poner el str  en minusculas y limpiarlo
-Comprobar si la palabra o busqueda esta incluida en la frase
-Mapear esas palabras y hacer un contador de cada un
-Devolver el contador de la busqueda
*/

const coincidencias = (str, busqueda) => {
  let textoLimpio = str
    .toLowerCase()
    .replace(/[!¡.,-]/gi, "")
    .split(" ");
  let contador = 0;

  for (let palabra of textoLimpio) {
    if (palabra === busqueda) {
      contador++;
    }
  }

  return `La palabra se repite ${contador} veces`;
};

console.log(coincidencias("hola mundo mundo holi adios mundo", "mundo"));

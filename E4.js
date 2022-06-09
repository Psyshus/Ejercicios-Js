/*

Enunciado 4

Dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, sin usar métodos propios del lenguaje, solo estructuras de control



Como hacerlo:

- Funcion con parametro "Texto"
- Crear una variable para guardar la cadena invertida
- Bucle que recorra el str y guarde los caracteres en la variable y devolver esa variable

*/

const cadenaInvertida = (str) => {
  let cadenaInvertida = "";
  for (let letra of str) {
    cadenaInvertida = letra + cadenaInvertida;
    // A;
    // B + A = BA
    // C +BA = CBA
    // D + CBA = DCBA
  }

  return cadenaInvertida;
};
console.log(cadenaInvertida("p syshus"));

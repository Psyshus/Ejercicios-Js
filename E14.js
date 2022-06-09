/*

Dado un str y un número, repetir el str tantas veces como el número lo indique


ejemplo


repiteme("Victor", 2)

Devuelve:
VictorVictor



Como hacerlo

Crea una funcion que reciba los dos parametros

bucle hasta el numero

Concatenar el str

*/

// const repetir = (str, num) => {
//   resultado = str.repeat(num);
//   return resultado;
// };
// console.log(repetir("Psyshus", 182));

const repiteme = (texto, veces) => {
  let resultado = "";
  for (i = 0; i < veces; i++) {
    resultado = resultado + ` ${texto}`;
  }
  return resultado;
};
console.log(repiteme("Psyshus", 10));

function masUsado(texto) {
  let mapeo_letras = {};
  let maximo_repeticiones = 0;
  let letra_mas_repetida = "";
  for (let letra of texto) {
    if (!mapeo_letras[letra]) {
      mapeo_letras[letra] = 1;
    } else {
      mapeo_letras[letra]++;
    }
  }
  for (let letra in mapeo_letras) {
    if (
      mapeo_letras[letra].toString().trim().length === 1 &&
      mapeo_letras[letra] > maximo_repeticiones
    ) {
      maximo_repeticiones = mapeo_letras[letra];
      letra_mas_repetida = letra;
    }
  }
  return letra_mas_repetida;
}
console.log(
  "La letra que mas se repite es: ",
  masUsado("nljjk kaka ter opq ñld")
);

/*Dado un número entero, inviertelo y devuelvelo


Ejemplo: invertirNumero(67)   = 76


Como hacerlo:
-Funcion que reciba los numeros 
-Convertir los números a str
-Crear un array con cada letra
-Darle la vuelta
-Unir el array en un str
-Converitir el atr en un entero
*/

const numInvertido = (num) => {
  let invertir =
    parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);
  return invertir;
};

console.log(numInvertido(-12));

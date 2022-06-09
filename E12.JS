/**
 Dado un número mostar todos los números desde ese al 0 de 8 en 8

 En una lista con guiones donde cada número debe empezar por numero

 Fuinción que reciba un número

 Inicializar variable con encabezado

 Bucle del número al cero

 concatenar el guión n°, número y sealto de linea

 restar 8

 concatenar y fin
 */

const hastaCero = (numero) => {
  let resultado = `---Del ${numero} al cero ---\n`;

  while (numero > 0) {
    resultado += ` - n°${numero}\n`;
    numero -= 8;
    // numero = numero - 8
  }

  if (numero <= 8) {
    resultado += " - n°0\n";
  }

  resultado += "--- FIN ---";
  return resultado;
};

console.log(hastaCero(90));

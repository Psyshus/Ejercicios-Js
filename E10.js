/**
 Ejercicio


 Dado un número, mostar una escalera con escalones de "[-]" usando el número para los niveles de la escalera


 ejemplos:


 escalera(4)
 
 [-]
 [-][-]
 [-][-][-]
 [-][-][-][-]


 como hacerlo:

 -Funbción que reciba un número
 -Recorrer el número de escaleras
 -En cada iteración pintar los escalones de ese nivel
 -Haciendo un bucle desde 1 hasta el nivel en el que estamos

 */

const escalera = (num) => {
  let escaleraCompleta = "";

  for (let nivel = 1; nivel <= num; nivel++) {
    let escalones = "";
    for (let escalon = 1; escalon <= nivel; escalon++) {
      escalones = escalones + "[-]";
    }
    escaleraCompleta += escalones + "\n";
    //  escaleraCompleta = escaleraCompleta + escalones + "\n";
  }
  return escaleraCompleta;
};

console.log(escalera(10));

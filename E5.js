/*Cuanto es el x porciento de x numero


Como hacerlo:


-Crea funcion con los parametros "porcentaje" y "número"
-Crea una variable para la operacion del porcentaje 
-Devolver un str que responda a la pregunta del enunciado

*/

const numPorcentaje = (porcentaje, numero) => {
  let operacion = numero * (porcentaje / 100);
  return (str = `El ${porcentaje}% de ${numero} es: ${operacion}`);
};

console.log(numPorcentaje(20, 100));

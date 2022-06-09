/**
 Dibujar un cuadrado hueco con asteriscos 



 Como resolverlo:

 -Funcion para crear el lado de arriba y abajo del cuadrado.
 - Funcion que haga los lados y el hueco del cuadrado.
 -Bucle del cero al tamañano del lado menos 2 para equilibrar con el asterisco de la izq y der.
 -Ir concatenando en una variable cada linea del cuadrado.
 -Mostrar el cuadrado en la funcion principal
 
 */

const arribaAbajo = (numero) => {
  let lado = "";
  for (let i = 0; i < numero; i++) {
    lado = lado + "*";
  }
  return lado;
};

const derIzq = (numero) => {
  let dibujo = arribaAbajo(numero) + "\n";
  let contenido = "";
  for (i = 0; i < numero - 2; i++) {
    contenido = "*";
    for (let x = 0; x < numero - 2; x++) {
      contenido = contenido + " ";
    }
    contenido = contenido + "*";
    dibujo = dibujo + contenido + "\n";
  }
  dibujo = dibujo + arribaAbajo(numero);
  return dibujo;
};

console.log(derIzq(10));

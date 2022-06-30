// Desafio complementario "Crear un algoritmo utilizando un ciclo"

alert("Hola!");
let usuario = prompt(
  "Ingresa si, si es que quieres hacer una operacion u no para parar"
);

while (usuario == "si") {
  let numero = parseFloat(prompt("Ingresa un numero para sumar"));
  for (let i = 0; i <= 10; i++) {
    let resultado = numero + i;
    console.log(numero + " + " + i + " es igual a " + resultado);
  }
  alert("El resultado se muestra por consola");
  let validacion = prompt("quieres seguir? escribe si o no para parar");
  if (validacion == "si") {
  } else {
    break;
  }
}

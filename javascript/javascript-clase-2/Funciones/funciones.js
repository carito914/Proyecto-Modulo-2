


saludar2();
function saludar() {
  console.log("¡Hola, bienvenido a la clase de JavaScript!");
}

saludar();

function saludarPersona(nombre, apellido) {
  console.log("Hola, "+ apellido + "!");
}

//saludarPersona(127187281, "Lopez");
saludarPersona("Carolina " , "Olmos");


function sumar(suma1, suma2) {
  const suma=suma1+suma2;
  console.log("La suma es:", suma);
}

sumar(9,2);
//sumar(10, 7);

function obtenerDoble(numero) {
  const doble = numero * 2;
  return doble;
}


console.log("El doble es:", obtenerDoble(10));

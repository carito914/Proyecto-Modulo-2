console.log("JavaScript conectado correctamente");

const sum1 = 5;
const sum2 = 6;
const sum = sum1 + sum2;
console.log("El resultado es: " + sum);

console.log("javascript es lo mejor ".toUpperCase());

document.getElementById("boton").onclick = function () {
  document.getElementById("titulo").innerHTML = "¡texto cambiado!";
  console.log("Hola!");
  window.scrollTo({   //  la tarea
    top: 0,
    behavior: "smooth"  // dentro del scrollTo
  });
};
function verificarEdad() {
  const edad = 17;
  let mensaje = "";

  if (edad >= 100) {
    mensaje = "Eres un anciano.";
  } else if (edad >= 18) {
    mensaje = "Eres mayor de edad.";
  } else {
    mensaje = "Eres menor de edad.";
  }

  document.getElementById("resultadoEdad").innerText = mensaje;
}

function verificarPositivo() {
  const numero = 5;
  let mensaje = "";

  if (numero >= 0) {
    mensaje = "El número es positivo.";
  } else {
    mensaje = "El número es negativo.";
  }

  document.getElementById("resultadoNumero").innerText = mensaje;
}

function verificarPar() {
  const numero = 6;
  let mensaje = "";

  if (numero % 2 === 0) {
    mensaje = "El número es par.";
  } else {
    mensaje = "El número es impar.";
  }

  document.getElementById("resultadoPar").innerText = mensaje;
}

function verificarNota() {
  const nota = 5.0;
  let mensaje = "";

  if (nota >= 4) {
    mensaje = "¡Aprobaste!";
  } else {
    mensaje = "Reprobaste.";
  }

  document.getElementById("resultadoNota").innerText = mensaje;
}

function verificarHora() {
  const hora = 21;
  let mensaje = "";

  if (hora < 12) {
    mensaje = "Buenos días";
  } else if (hora < 18) {
    mensaje = "Buenas tardes";
  } else {
    mensaje = "Buenas noches";
  }

  document.getElementById("resultadoHora").innerText = mensaje;
}

function mostrarDia() {
  
  const numero = parseInt(document.getElementById("numeroDia").value);
  let mensaje = "";

  switch (numero) {
    case 1:
      mensaje = "Lunes";
      break;
    case 2:
      mensaje = "Martes";
      break;
    case 3:
      mensaje = "Miércoles";
      break;
    case 4:
      mensaje = "Jueves";
      break;
    case 5:
      mensaje = "Viernes";
      break;
    case 6:
      mensaje = "Sábado";
      break;
    case 7:
      mensaje = "Domingo";
      break;
    default:
      mensaje = "Número inválido. Debe estar entre 1 y 7.";
  }

  document.getElementById("resultadoDia").innerText = mensaje;
}

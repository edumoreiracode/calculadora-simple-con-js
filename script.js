function operarDosNumeros() {
  // Saludo y pregunto si quiere realizar una operación
  // alert("¡Hola! ¿Deseas calcular la operación entre dos números?");
  let decision = prompt("¡Hola! ¿Deseas calcular la operación entre dos números? Ingesá 'si' de lo contrario ingresá 'no'").toUpperCase();
  let bandera = false;
  let malIngresado = false;
  let ayudado = false;

  // Mientras ingrese datos erróneos no podrá continuar
  while (!bandera) {
    if (decision != "SI") {
      if (decision != "NO") {
        decision = prompt("Dato erróneo, por favor ingesá 'si' de lo contrario ingresa 'no'").toUpperCase();
      }else {
        bandera = true;
      }
    } else {
      bandera = true;
    }
  }

  // Mientras decision sea igual a 'si' se repetirá el ciclo
  while(decision === "SI") {

    // Declaro e inicializo dos variables para los números
    // Una variable para la selección de operación
    // Y una variable para almacenar el resultado
    let num1 = parseInt(prompt("¡Genial! Ingresa el primer número."));
    let operacion = prompt("¿Que operación querés realizar? Ingresa solamente  + - * / ");
    let num2 = parseInt(prompt("Ahora ingresa el segundo número."));
    let resultado = 0;

    // Se realiza la operación correspondiente
    // Si el valor de operación ingresado es invalido se devuelve un error
    switch(operacion) {
      case '+':
        resultado = num1 + num2;  
      break;
      case '-':
        resultado = num1 - num2;
      break;
      case '*':
        resultado = num1 * num2;
      break;
      case '/':
        if (num2 === 0) {
          alert("¡ERROR! Expresión invalida, no se puede dividir por cero.");
          malIngresado = true;
        }
        resultado = num1 / num2;
      break;
      default:
        alert("¡ERROR! Valor ingresado invalido.");
        malIngresado = true;
      break;
    }

    // Si el valor fue mal ingresado pregunto si quiere volver a intentar
    if (malIngresado) {
      decision = prompt("Por favor si querés continuar ingresa 'si' de lo contrario ingresa 'no'").toUpperCase();
    }else { 
      //Si fue bien ingresado devuelvo el resultado
      // Y pregunto si desea realizar otra operación
      alert("El resultado de la operación es de: " + resultado);
      ayudado = true;
      decision = prompt("¿Te animas a realizar otro calculo? Si es asi ingresa 'si' de lo contrario ingresa 'no'").toUpperCase();
    }
  }

  // Si ya ha realizado una operación satisfactoriamente devuelvo un texto
  // De lo contrario devuelvo otro
  if (ayudado){
    alert("Muchas gracias, espero haberte ayudado =D");
  }else {
    alert("Vale sera la proxima.");
  }
}
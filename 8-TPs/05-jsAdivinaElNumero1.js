/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto;
let numeroIngresado;
let intentos = 0;

function comenzar()
{

  numeroSecreto = Math.floor(Math.random() * (100 - 1)) + 1;
  alert(numeroSecreto);

}

function verificar()
{
  intentos = intentos + 1;
  numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
   switch (intentos){
     case 1:
	if (numeroIngresado > numeroSecreto) {
    alert("Se paso...");
   
  } else if(numeroIngresado < numeroSecreto){
    alert("Falta...");
  
  } else {
    alert("Usted es el ganador y en solo " + intentos + " intentos");
  } break;
  case 2: 
if (numeroIngresado > numeroSecreto) {
  alert("Se paso...");
 
} else if(numeroIngresado < numeroSecreto){
  alert("Falta...");

} else {
  alert("Usted es el ganador y en solo " + intentos + " intentos");
} break;
  case 3:
    if (numeroIngresado > numeroSecreto) {
      alert("Se paso...");
     
    } else if(numeroIngresado < numeroSecreto){
      alert("Falta...");
    
    } else {
      alert("Usted es el ganador y en solo " + intentos + " intentos");
    } break;
  case 4:
    if (numeroIngresado > numeroSecreto) {
      alert("Se paso...");
     
    } else if(numeroIngresado < numeroSecreto){
      alert("Falta...");
    
    } else {
      alert("Usted es el ganador y en solo " + intentos + " intentos");
    } break;
  case 5:
    if (numeroIngresado > numeroSecreto) {
      alert("Se paso...");
     
    } else if(numeroIngresado < numeroSecreto){
      alert("Falta...");
    
    } else {
      alert("Usted es el ganador y en solo " + intentos + " intentos");
    } break;
} if (intentos > 5){
  alert("Perdiste! Te quedaste sin intentos");
}
}
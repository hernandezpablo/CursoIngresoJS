/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;
	numero = parseInt(prompt("ingrese un número entre 0 y 9."));

	while (numero >9 || numero <0 || isNaN(numero)){
		numero = parseInt(prompt("El numero es incorrecto, ingrese un numero entre 0 y 9"));
	}
	document.getElementById("txtIdNumero").value = numero;
	
}//FIN DE LA FUNCIÓN

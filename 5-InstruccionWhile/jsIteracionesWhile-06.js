function mostrar()
{
	let promedio;
	let numero;
	let contador = 0;
	let acumulador = 0;

	while (contador < 5){
		numero= parseInt(prompt("Ingrese un numero"));
		while (isNaN(numero)){
			alert("Eso n oes un numero");
		}
		acumulador= acumulador + numero; // acumulador+= numero
		contador++;
	}

	/*numero1= parseInt(prompt("Ingrese 1 numero"));
	numero2= parseInt(prompt("Ingrese 1 numero"));
	numero3= parseInt(prompt("Ingrese 1 numero"));
	numero4= parseInt(prompt("Ingrese 1 numero"));
	numero5= parseInt(prompt("Ingrese 1 numero"));
*/
	

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;


}//FIN DE LA FUNCIÓN
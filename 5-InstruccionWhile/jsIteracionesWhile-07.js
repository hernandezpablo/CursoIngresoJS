/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let promedio;
	let acumulador = 0;
	let respuesta = "si";
	let contador = 0;

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numero;
		contador ++;
		promedio = acumulador / contador;
		respuesta = prompt("Quiere ingresar otro numero?");

	} while(respuesta =="si");
		document.getElementById("txtIdSuma").value = acumulador;
		document.getElementById("txtIdPromedio").value = promedio;

		
	
	
}//FIN DE LA FUNCIÓN
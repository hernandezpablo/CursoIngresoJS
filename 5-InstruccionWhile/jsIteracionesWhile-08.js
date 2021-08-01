/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let respuesta="Si";
	let sumaPositivos=0;
	let multiplicacionNegativos = 1;
	let contadorNegativo = 0;
	do {
		numero = parseInt(prompt("Ingrese un numero:"));
		while (isNaN(numero)){
			numero= parseInt(prompt("Eso no es un numero, ingrese un numero"));
		}
		if (numero >= 0){
			sumaPositivos = numero + sumaPositivos;
		} else {
			contadorNegativo = contadorNegativo + 1;
			multiplicacionNegativos = numero * multiplicacionNegativos;
			
			
		}
		respuesta= prompt("Desea agregar otro numero? Si o No ");
	}while (respuesta =="Si");
	if (contadorNegativo == 0){
		multiplicacionNegativos = 0;
	}
	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;
	




	


	
}//FIN DE LA FUNCIÓN
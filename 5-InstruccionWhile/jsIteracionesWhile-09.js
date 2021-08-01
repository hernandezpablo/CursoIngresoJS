/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	let numero;
	let nuevoMaximo;
	let nuevoMinimo;
	let respuesta = "s";
	let primeraVez = true;

	do {
		//console.log (nuevoMaximo + nuevoMinimo);
		numero = parseInt(prompt("Ingrese un numero:"));
		while (isNaN(numero)){
			numero= parseInt(prompt("Eso no es un numero, ingrese un numero:"));
		} 
		/*if (isNaN(nuevoMaximo) && isNaN(nuevoMinimo)) {
			nuevoMaximo= numero;
			nuevoMinimo = numero;
		}*/
		if (primeraVez ==true) { //if (primeraVez){
			nuevoMaximo = numero;
			nuevoMinimo = numero;
			primeraVez= false;	
		} else { 
		  if  (numero > nuevoMaximo){
			 nuevoMaximo = numero;
		  }
			else if (numero < nuevoMinimo){
			  nuevoMinimo = numero;
		  }
		}
		
		respuesta = prompt("Desea ingresar otro numero? s o n");
	} while (respuesta == "s");

	document.getElementById("txtIdMaximo").value = nuevoMaximo;
	document.getElementById("txtIdMinimo").value = nuevoMinimo;
	
	
}//FIN DE LA FUNCIÓN

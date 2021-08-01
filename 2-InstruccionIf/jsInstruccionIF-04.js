function mostrar()
{
	//tomo la edad  
	let edad;

	edad= parseInt(document.getElementById("txtIdEdad").value);
	//if (!(edad <13 || edad >17)) estoy preguntando si no esta fuera del rango.
	// alert("Es adolecente")

	/*if (edad >= 13 && edad <=17){
		alert("Es adolecente");
	} */
	if (edad >= 13) {
		if (edad <= 17){
			alert("Es adolecente")
		}
	}


}//FIN DE LA FUNCIÓN
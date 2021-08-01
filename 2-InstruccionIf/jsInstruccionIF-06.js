function mostrar()
{
	//tomo la edad  
	let edad;

	edad= parseInt(document.getElementById("txtIdEdad").value);

	if(edad <= 17 && edad >= 13 ) {
		alert("La persona es adolescente");
	} else if (edad > 17) {
		alert ("La persona es mayor de edad");
	}
	else {
		alert("La persona es un niño");
	}


	/* if(edad <= 17 && edad >= 13 ) {
		alert("La persona es adolescente");
	} else {
		if (edad > 17) {
		alert ("La persona es mayor de edad");
		} else {
			alert("La persona es un niño");
		}
		} */
}//FIN DE LA FUNCIÓN
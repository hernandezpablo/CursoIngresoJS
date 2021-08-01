function mostrar()
{
	let edad;

	edad= parseInt(document.getElementById("txtIdEdad").value);

	if(edad > 17 || edad < 13 ) {
		alert("La persona no es adolecente");
	}
	

}//FIN DE LA FUNCIÓN
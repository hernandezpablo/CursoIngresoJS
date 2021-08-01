function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			alert("Hace Frio!!!");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor");
		
		
		

	}

}//FIN DE LA FUNCIÓN
function mostrar()
{
	let estacion;
	let destino;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
				alert("Se viaja");
			} else {
				alert("No se viaja");
			} break;
		case "Verano":
			if (destino == "Mar del plata" && destino == "Cataratas"){
				alert("Se viaja");
			}else {
				alert("No se viaja");
			} break;
		case "Primavera":
			if (destino == "Bariloche"){
				alert("No se viaja");
			}else{
				alert("Se viaja");
			} break;
		case "Otoño":
			alert("Se viaja");
	}

}//FIN DE LA FUNCIÓN
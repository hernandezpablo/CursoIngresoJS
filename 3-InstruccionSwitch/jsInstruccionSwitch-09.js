function mostrar()
{
	let destino;
	let precio = 15000;
	let estacion;
	let precioFinal;
	let aumento;
	let descuento;
	

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	

	switch (estacion){
		case "Verano":
			if (destino =="Bariloche"){
				precioFinal = precio * 0.8;
				//descuento = precio *0.2
				//alert("El precio es " + (precio*0.8));
			} else if (destino =="Mar del plata"){
				precioFinal = precio * 1.20;
				//aumento = precio *1.20
				//alert("El precio es " + (precio*1.20));
			} else {
				precioFinal = precio * 1.10;
				//aumento = precio * 1.10
				//alert("El precio es " + (precio * 1.10));
			} break;
		case "Invierno":
			if (destino =="Bariloche"){
				precioFinal = precio * 1.20;
				//alert("El precio es " + (precio*1.2));
			} else if (destino =="Mar del plata"){
				precioFinal = precio * 0.8;
					//alert("El precio es " + (precio*0.8));
			} else {
				precioFinal = precio * 0.9;
					//alert("El precio es " + (precio * 0.9));
			} break;
		case "Otoño":
		case "Primavera":
			if (destino =="Cordoba"){
				precioFinal = precio
				//alert("El precio es " + precio);
					} 
			 else {
				precioFinal = precio * 1.10;
					//alert("El precio es " + (precio * 1.10));
				} break;
		
					
				
	}
	precioFinal = precio + aumento - descuento;
	
	alert("El precio es " + precioFinal);
	
	
	
	

}//FIN DE LA FUNCIÓN
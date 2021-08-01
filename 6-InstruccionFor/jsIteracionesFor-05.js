function mostrar()
{
	let respuesta;
	for(let i = 0;;i++){
		respuesta = parseInt(prompt("Ingrese el numero del 1 al 10"));
		while(isNaN(respuesta)){
			respuesta = parseInt(prompt("Error, ingrese un numero"));
		}
		if (respuesta == 9){ break;}			
		
	
	}



}//FIN DE LA FUNCIÓN
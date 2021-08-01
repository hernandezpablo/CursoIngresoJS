function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estado;
	let temperatura;
	let nombreMaxTemp;
	let promedio;
	let contViudoMayor = 0;
	let contEstadoSoltero = 0;
	let contEstadoViudo = 0;
	let contAnciano = 0;
	let acumEdad = 0;
	let maxTemp = 0;
	let respuesta = "s";
	let cantidadSolteroViudo = 0;

	do {
		nombre = prompt("Ingrese su nombre");
		while (!(isNaN(nombre))){
		 	nombre = prompt("El nombre ingresado no puede ser un numero, ingrese un nombre");
		} edad = parseInt(prompt("Ingrese su edad"));
		while (isNaN(edad)){
			edad = parseInt(prompt("La edad ingresada es incorrecta, ingrese una edad"));
		} sexo = prompt ("Ingrese su sexo: f/m").toLowerCase();
		while (sexo != "f" && sexo !="m") {
			sexo = prompt("El sexo ingresado es incorrecto, ingrese un sexo: f/m");
		} estado = prompt("Ingrese su estado civil: soltero/casado/viudo");
		while (estado != "soltero" && estado != "casado" && estado != "viudo"){
			estado = prompt("El estado civil ingresado es el incorrecto. Ingrese su estado civil entre soltero/casado/viudo");
		} temperatura = parseInt(prompt("Ingrese su temperatura corporal en Celsius"));
		while (temperatura < 30 || temperatura > 45){
			temperatura = parseInt(prompt("La temperatura ingresada es incorrecta, ingrese su temperatura en celsius"));
		}
		if (temperatura >= maxTemp) {
			//alert("Ingresaste a mayor temperatura");
			maxTemp = temperatura;
			nombreMaxTemp = nombre;
		}
		switch (estado){
			case "soltero":
				if (sexo == "m"){
					//alert("Ingresaste a hombre soltero");
				acumEdad= acumEdad + edad;
				contEstadoSoltero ++;
				//alert(acumEdad);
				//alert(contEstadoSoltero);
				} break;
			case "viudo":
				if (sexo =="m" && edad >=18){
					alert("Ingresaste a hombre viudo mayor");
					contViudoMayor ++;
					contEstadoViudo ++;
				} else if (sexo =="m"){
					//alert("Ingresaste a hombre viudo ");
					contEstadoViudo ++;
				} break;
			case "casado":
		} if (edad>=60 && temperatura>38){
			//alert("Ingresaste a anciano");
			contAnciano ++;
		}
	respuesta = prompt("Desea ingresar otro pasajero? s/n");
	}while(respuesta =="s")
	
	
 cantidadSolteroViudo = contEstadoSoltero + contEstadoViudo;
 promedio = acumEdad / contEstadoSoltero;

 document.write("A) La persona con mayor temperatura :" + maxTemp + " y su edad es: " + nombreMaxTemp + "<br>");
 document.write("B) La cantidad de mayores de edad viudos es: " + contViudoMayor + "<br>");
 document.write("C) La cantidad de hombres solteros o viudos es de: " + cantidadSolteroViudo + "<br>");
 document.write("D) La cantidad de personas mayores de edad que tienen mas de 38 de temperatura es de: " + contAnciano);
 document.write("E) El promedio de edad de los hombres solteros es: " + promedio);
} 
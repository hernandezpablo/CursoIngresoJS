function mostrar()
{
	
	let repeticiones = parseInt(prompt("ingrese el número de repeticiones"));
	while (isNaN(repeticiones)){
		repeticiones = parseInt(prompt("El caracter ingresado no es un numero, ingrese un numero:"));
	}

	for(let i = 1;i <= repeticiones;i++){
		alert("Hola UTN FRA");
	}
/* for(let i=0; i<1000; i++){
	console.log(i);
	if(i==10){
		break;
	}
} */

}//FIN DE LA FUNCIÓN
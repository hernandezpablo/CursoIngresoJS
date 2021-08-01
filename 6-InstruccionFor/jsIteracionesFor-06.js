function mostrar()
{
	let numero;
	let cantPares=0;
	numero = parseInt(prompt("Ingrese un numero"));
		while (isNaN(numero)){
			numero = parseInt(prompt("Error, ingrese un numero"));
		}
	/*for(let i = 1;; i++){
		
		if(i % 2 == 0){
			console.log(i);
		}
		if (i== numero){
			break;
		}
	};*/
	 for (let i=1;i <= numero;i++){
		if(i% 2== 0){
			console.log(i);
			cantPares++
		}
	} 
	alert("La cantidad de pares: " + cantPares);

}//FIN DE LA FUNCIÓN
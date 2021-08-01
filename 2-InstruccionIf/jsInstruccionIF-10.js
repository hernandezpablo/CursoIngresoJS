function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota;
	let notaMax = 10;
	let notaMin =1

	nota = Math.floor((Math.random()* (notaMax - notaMin + 1)) + notaMin);
	alert(nota);
	if (nota <= 10 && nota >=9){
		alert("EXCELENTE");
	} else if (nota >= 4){
		alert("APROBO");
	} else {
		alert("Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN
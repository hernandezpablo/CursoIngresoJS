function mostrar()
{
let numero;
let numeroDiv;
let cantidadDiv=0;

numero = parseInt(prompt("Ingrese un numero"));
while (isNaN(numero)){
	numero=parseInt(prompt("Error. Ingrese un numero."));
}
for(let i =1;i<=numero;i++){
	if(numero % i ==0){
		numeroDiv = numeroDiv+" " + i;
		cantidadDiv ++;
	
	}

}
document.write("Los numeros divisibles por " + numero + " son:" + numeroDiv);
document.write("La cantidad de numeros divisibles son: " + cantidadDiv);
}//FIN DE LA FUNCIÓN
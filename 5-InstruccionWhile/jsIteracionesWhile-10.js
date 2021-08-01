/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
numero%2 != 0 es impar
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	
	let respuesta;
	let numero;
	let contadorPar;
	let promedioPos;
	let promedioNeg;
	let resta;
	let sumaPositivo = 0;
	let sumaNegativo = 0;
	let contador0 = 0;
	let contadorPositivo = 0;
	let contadorNegativo = 0;

	do {
		numero = parseInt(prompt("Ingrese un numero"));

		while (isNaN(numero)){
			numero = parseInt(prompt("El caracter ingresado no es un numero"));
		}
		if (numero> 0) {
			sumaPositivo = numero + sumaPositivo;
			contadorPositivo ++;
			//promedioPos = sumaPositivo / contadorPositivo;
		} else if(numero < 0) {
			sumaNegativo = numero + sumaNegativo;
			contadorNegativo ++;
			//promedioNeg = sumaNegativo / contadorNegativo;
		} else {
			contador0 ++;
		}
		if (numero%2==0) {
			contadorPar++;
		}
		resta = promedioPositivo - sumaNegativo; //consultar si resta = sumaPositivo + sumaNegativo;
		respuesta = prompt("Desea ingresar otro numero? s/n");
	} while (respuesta =="s");
	//validar que no dividis por 0
	if (contadorPositivo > 0 || contadorNegativo > 0){
	promedioPos = sumaPositivo / contadorPositivo;
	promedioNeg = sumaNegativo / contadorNegativo;
	resta = promedioPos - promedioNeg;
	}
	alert("La suma de los positivos es: " + sumaPositivo + " y la cantidad de numeros positivos es: " + contadorPositivo + " y su promedio es: " + promedioPos + " ");
	alert("La suma de los negativos es: " + sumaNegativo + " y la cantidad de numeros negativos es: " + contadorNegativo + " y su promedio es: " + promedioNeg + " ");
	alert("La cantidad de 0 que hay es: " + contador0 + " ");
	alert("la resta entre los positivos y negativos da: " + resta);
}//FIN DE LA FUNCIÓN
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
Estrategia de resolucion
1)variables tipo/precio/cantidad/marca/fabricante
punto a====> cantAlBarato/fabAlBarato/precio/alBarato;
punto b===> acumuladorAl/acumuladorBar/acumuladorJab /contadorAl/contadorBar/contadorjab/promedioMayor
punto c => acumuladorJab del punto b
--------
cosas que se piden 5 veces
2)generar un bucle que se repita 5 veces(for)
 cosas que se tienen que hacer 5 veces(van dentro del bucle);
 pido el tipo y lo valido, pido el precio y lo valido, pido cantidad y lo valido
 pido marca y pido fabricante

 3) me fijo si es alcohol
 si es alcohol me fijo si es la primera vez que se ingresa alcohol o
 ya se habia ingresado previamente.
 si es la primera vez cambio el flag y guardo el precio la cantidad y el fabricante
 como alcohol barato. y por cada alcohol me fijo si es mas barato que el que ya tengo 
 como mas barato
 b) me fijo el tipo de producto(barbijo, alchol o jabon) y actualizo el acumulador y el contador
 segun corresponda.
 ------------------------
4) cosas que tengo que hacer despues del for.
mostrar respuesta a,
me fijo cual fue el tipo con mas unidades vendidas y calculo el promedio.
*/
function mostrar()
{
	let tipo;
	let cantidad;
	let precio;
	let marca;
	let fabricante;
	let cantidadAlBarato =0;
	let fabAlBarato;
	let precioAlBarato = 0;
	let flagAlcohol = 1;
	let acumuladorAl = 0;
	let acumuladorBa = 0;
	let acumuladorJa = 0;
	let contadorAl = 0;
	let contadorBa = 0;
	let contadorJa = 0;
	let promedio = 0;
	let mayorTipo;

	//-------------Solicito al usuario que ingrese los datos------------
	for(let i=0;i<5;i++){
		tipo = prompt("Ingrese el tipo: barbijo/jabon/alcohol").toLowerCase();
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol"){
			tipo = prompt("Eso no es un tipo valido, intente nuevamente:");
		}
		
		precio = parseInt(prompt("Ingrese un precio entre 100 a 300:"));
		while(isNaN(precio)){
			precio = parseInt(prompt("El caracter ingresado no es un numero, ingrese un numero"))
		}
		while (precio < 100 || precio >300){
			precio = parseInt(prompt("Ingrese un precio entre 100 y 300"));
		}
		
		cantidad = parseInt(prompt("Ingrese la cantidad de unidades entre 1 a 1000"));
		while (isNaN(cantidad)){
			cantidad = parseInt(prompt("El caracter ingresado no es un numero, ingrese nuevamente"));
		} while (cantidad < 1 || cantidad > 1000){
			cantidad = parseInt(prompt("La cantidad ingresada no es valida, ingrese una cantidad entre 1 y 1000"));
		} 
		marca = prompt("Ingrese la marca del producto:");
		fabricante = prompt("Ingrese el fabricante del producto");
		
		switch (tipo){
			case "barbijo":
			//alert("Entraste a barbijo condicion");
			acumuladorBa = cantidad + acumuladorBa;
			contadorBa ++;
			break;
		case "jabon":
			//alert("Entraste en jabon esta condicion");
			acumuladorJa = cantidad +acumuladorJa;
			contadorJa++;
			break;
		case "alcohol":
			if (flagAlcohol ||precio < precioAlBarato){
			//alert("Entraste al alcohol barato");
			precioAlBarato = precio;
			cantidadAlBarato = cantidad;
			fabAlBarato = fabricante;
			acumuladorAl = cantidad + acumuladorAl;
			contadorAl++;
			flagAlcohol = 0;
		} else{
			//alert("Entraste al alcohol normal");
			acumuladorAl = cantidad + acumuladorAl;
			contadorAl++;
		}
	}
	 //fin del for
	if (acumuladorAl > acumuladorBa && acumuladorAl >acumuladorJa){
		//alert("Entraste en alcohol mas grande");
		mayorTipo = "alcohol";
		promedio = acumuladorAl / contadorAl;
	} else if (acumuladorBa >= acumuladorAl && acumuladorBa >acumuladorJa){
		//alert("Entraste en barbijo mas grande");
		mayorTipo = "barbijo";
		promedio = acumuladorBa/ contadorBa;
	} else {
		//alert("Entraste en jabon mas grande");
		mayorTipo ="jabon";
		promedio = acumuladorJa/contadorJa;
	}
	
	}
	
	if (flagAlcohol==1){
		document.write("A) Usted no ingreso el alcohol")
	} else{
	  document.write("A)Del alcohol mas barato "+ precioAlBarato +  " la cantidad de alcohol es: " + cantidadAlBarato +". Su fabricante es: " + fabAlBarato + "<br>");
	 document.write("B) El tipo que mas unidades tiene es:" + mayorTipo + ". Su promedio es: " + promedio + "<br>");
	 document.write("C) La cantidad de jabon que hay es :" + acumuladorJa);
	}
}

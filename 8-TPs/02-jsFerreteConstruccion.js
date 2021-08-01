/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let totalAlambre;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    perimetro = (largo + ancho) * 2;
    totalAlambre = perimetro * 3;

    alert ("La cantidad de alambre a comprar es " + totalAlambre + " metros");
}
function Circulo () 
{
	let radio;
    let perimetro;
    let totalAlambre;

    radio = parseInt(document.getElementById("txtIdRadio").value);

    perimetro = 2 * radio * Math.PI;
    totalAlambre = perimetro * 3;

    alert("La cantidad de alambre a comprar es " + totalAlambre);

}
function Materiales () 
{
let largo;
let ancho;
let areaTerreno;
let calTotal;
let cementoTotal;
    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);


    areaTerreno = largo * ancho;
    calTotal = areaTerreno * 3;
    cementoTotal = areaTerreno * 2;

    alert("La cantidad de cemento que necesitas es " + cementoTotal + " bolsas, y la cantidad de cal que necesitas son " + calTotal + " bolsas");
}
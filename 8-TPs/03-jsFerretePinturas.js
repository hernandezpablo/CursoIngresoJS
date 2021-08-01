/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let farenACen;

    temperatura = parseInt(document.getElementById("txtIdTemperatura").value);

    farenACen = (temperatura - 32) * 5/9;

    alert(temperatura + " Farenheit son " + farenACen + " centigrados");

}

function CentigradosFahrenheit () 
{
    let temperatura;
    let cenAFaren;

    temperatura = parseInt(document.getElementById("txtIdTemperatura").value);

    cenAFaren = (temperatura * 9/5) + 32;

    alert(temperatura + " centigrados son " + cenAFaren + " Farenheit");
}
// 0 °C × 9/5) + 32 = celcius a farenheit
// (32 °F − 32) × 5/9 = de farenheit a celcius
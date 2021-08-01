function mostrar()
{
  let tipo;
  let cantidad;
  let precio;
  let importeNeto;
  let maxTipo =0;
  let maxPrecio=0;
  let pregunta = "s";
  let importeBruto=0;
  let acumulCa =0;
  let acumulAr =0;
  let acumulCe =0;
  let flagCaro = 1;
  let descuento = 0;
  let mayorTipo;
  let subtotal;
  let totalBolsas=0;
  let mayorCantidadBolsas=0;

  do {
    tipo = prompt("Ingrese el producto: arena/cal/cemento");
    while (tipo != "arena" && tipo !="cal" && tipo !="cemento"){
      tipo= prompt("Producto incorrecto, ingrese el producto: arena/cal/cemento");
    }
    
    cantidad = parseInt(prompt("Ingrese la cantidad de bolsas"));
    while (isNaN(cantidad) || cantidad <= 0){
      cantidad = parseInt(prompt("Error, ingrese un numero, indicando la cantidad de bolsas"));
    }
    precio = parseInt(prompt("Ingrese el precio por bolsa"));
    while (isNaN(precio) || precio <=0){
      precio = parseInt(prompt("Error, ingrese un numero valido para el precio por bolsa"));
    }

    subtotal = precio * cantidad;
    importeBruto += subtotal;
    if (tipo =="cemento"){
      acumulCe += cantidad;
    } else if(tipo =="cal"){
      acumulCa += cantidad;
    } else{
      acumulAr += cantidad;
    }
    if (flagCaro|| precio > maxPrecio){
      maxPrecio = precio;
      maxTipo = tipo;
      flagCaro = 0;
    }

    pregunta = prompt("Dese ingresar otro dato? s/n");
  } while (pregunta =="s")

totalBolsas =acumulAr + acumulCe + acumulCa;
if (totalBolsas>30){
  descuento =importeBruto *.25;
} else if(totalBolsas > 10){
  descuento = importeBruto *.15;
} 
importeNeto = importeBruto - descuento;

if (acumulAr > acumulCa && acumulCa >acumulCe){
  mayorTipo = "arena";
  mayorCantidadBolsas = acumulAr
} else if (acumulCa >= acumulAr && acumulCa >acumulCa){
  mayorTipo = "Cal";
  mayorCantidadBolsas = acumulCa
} else {
  mayorTipo ="Cemento";
  mayorCantidadBolsas = acumulCe
}
document.write("a) Importe Bruto:" + importeBruto + "<br>");
if (descuento != 0){
  document.write("b) Improte Neto : " + importeNeto + "<br>");
} else {
  document.write("b) No se efectuo nungun descuento<br>");
}
document.write("d) El tipo con mas cantidad de bolsas es: " + mayorTipo + "<br>");
document.write("f) El tipo mas caro es: " + maxTipo + "<br>");
}
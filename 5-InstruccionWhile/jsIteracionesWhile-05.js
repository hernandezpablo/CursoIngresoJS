/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo = prompt("ingrese f ó m .").toLowerCase();//si no hay problema que sea mayus o minus

	while (!(sexo == "f" || sexo =="m")) {
		sexo = prompt("Valor incorrecto, Ingrese f o m");
	}
	document.getElementById("txtIdSexo").value = sexo;

	
}//FIN DE LA FUNCIÓN

	//Variables
	var tarea = document.getElementById('tarea'); //Valor del Textarea
	var btnAgregar = document.getElementById('btnAgregar'); //Valor del boton
	var lista = document.getElementById('lista');

var agregarTarea = function (){

	if(tarea.value==""){
		tarea.setAttribute('placeholder', 'Debes ingresar una tarea');
		tarea.className = 'error';
		return false;
	}
	console.log("voy agregar tarea");
	var tareaNueva = document.createElement('ol');
	var input = document.createElement('input');
	input.type = 'checkbox';
	var tareaHecha = document.createElement('i');
	tareaHecha.className = 'hecho fa fa-trash-o fa-lg';	
	tareaHecha.setAttribute("aria-hidden", "true");
	var contenido = document.createTextNode(tarea.value); 

	tareaNueva.appendChild(input);
	tareaNueva.appendChild(contenido);
	tareaNueva.appendChild(tareaHecha);

	input.onclick = function(){
		if(input.checked == true){
			contenido.parentElement.setAttribute("class","tachado");
		}else{
			contenido.parentElement.setAttribute("class","");
		}
	};
		
	tareaHecha.addEventListener("click", function(){
		console.log("click en el bote")
		tareaNueva.style.display = "none";
	});
	
	tarea.value = "";
	lista.appendChild(tareaNueva);
};
	
btnAgregar.addEventListener('click', agregarTarea);
 
	
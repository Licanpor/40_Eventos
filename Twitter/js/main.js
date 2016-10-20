function listarTareas(){
	//Variables
	var tarea = document.getElementById('tarea').value; //Valor del Textarea
	var btnAgregar = document.getElementById('btnAgregar'); //Valor del boton
	var lista = document.getElementById('lista');
	


	
	//funciones
	var agregarTarea = function (){
		var tareaNueva = document.createElement('input');
		var tareaHecha = document.createElement('i');
		tareaNueva.type = 'checkbox';
		tareaHecha.className = 'hecho';
		tareaHecha.className = 'fa';
		tareaHecha.className = 'fa-trash-o';
		tareaHecha.className = 'fa-lg';
		tareaHecha.setAttribute("aria-hidden", "true");
		
		lista.appendChild(tareaNueva);
		lista.appendChild(tareaHecha);

		for (var i = 0; i < hecho.length -1; i++) {
		hecho[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}
	};

	// function validarInput(){
	// 	if()
	// };


	//Eventos
	//Evento del boton--agrega la nueva tarea
	btnAgregar.addEventListener('click', agregarTarea);
	tarea.addEventListener('click', validarInput);
	
	}
	//Evento del textarea--- verifica que el campo no este vacio









		// document.getElementsByClassName('error');
		// 	while(spans.length > 0)	{
		// 		spans[0].parentElement.removeChild(spans[0]);
		// 	}




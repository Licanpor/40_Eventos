var btnAgregar = document.getElementById('btnAgregar');
var paLista = document.getElementById('paLista');
var divPrincipal = document.getElementById('divPrincipal');

var añadirLista = function (){


	
	var input = document.createElement('input');
		input.type = 'text';
		input.id = 'input'
		input.className = 'form-control';
		input.setAttribute('placeholder','Nombre de la lista');


	
	var botonLi = document.createElement('button');
		botonLi.type = 'button';
		botonLi.id = 'botonLi';
		botonLi.className = 'btn btn-default mg ';
		botonLi.innerHTML = 'Listo!';

	paLista.appendChild(input);
	paLista.appendChild(botonLi);
	paLista.replaceChild(input, btnAgregar);

	botonLi.addEventListener('click', function(){});


	var crearTarjeta = function(){


		if(input.value==""){
			input.setAttribute('placeholder', 'Espera! Cuál es el título?');
		
			return false;
		}

		paLista.replaceChild(btnAgregar, botonLi);
		paLista.removeChild(input);

		var divLista = document.createElement('div');
			divLista.id = 'paTarjeta';
		var h4 = document.createElement('h4');
			h4.id = 'h4';
		var titulo = document.createTextNode(input.value);

		var divForm = document.createElement('div');
			divForm.className = 'form-group';
		var textarea = document.createElement('textarea');
			textarea.className = 'form-control';
		var botonTar = document.createElement('button');
			botonTar.id = 'botonTar';
			botonTar.type = 'button';
			botonTar.className = 'btn btn-success';
			botonTar.innerHTML = 'Añadir Tarjeta';

		

		divPrincipal.insertBefore(divLista, divPrincipal.childNodes[0]);
		divLista.appendChild(h4);
		h4.appendChild(titulo);
		divLista.appendChild(divForm);
		divForm.appendChild(textarea);
		divForm.appendChild(botonTar);

		var añadirTarjeta = function(){
			if(textarea.value==""){
			textarea.setAttribute('placeholder', '*o* Falta tu tarjeta aquí!');
		
			return false;
			}
			var divTarjeta = document.createElement('div');
				divTarjeta.id = 'divTarjeta';
			var h5 = document.createElement('h5');
				h5.id = 'h5';
			var tarjeta = document.createTextNode(textarea.value);
			var ultimoChild = divLista.childNodes.length - 1;

			textarea.value = "";

			divLista.insertBefore(divTarjeta, divLista.childNodes[ultimoChild]);
			divTarjeta.appendChild(h5);
			h5.appendChild(tarjeta);

		}
		botonTar.addEventListener('click', añadirTarjeta);
	}
	botonLi.addEventListener('click', crearTarjeta);
}
btnAgregar.addEventListener('click', añadirLista);



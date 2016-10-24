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


	var crearTarjeta = function(){
		var divTarjeta = document.createElement('DIV');
		divTarjeta.id = 'paTarjeta';
		var titulo = document.createTextNode(input.value);
		var divForm = document.createElement('DIV');
		divForm.className = 'form-group';
		var textarea = document.createElement('TEXTAREA');
		textarea.className = 'form-control';
		var botonTar = document.createElement('button');
		botonTar.type = 'button';
		botonTar.className = 'btn btn-success';
		botonTar.innerHTML = 'Añanir Tarjeta';

		divPrincipal.appendChild(divTarjeta);
		divTarjeta.appendChild(titulo);
		divTarjeta.appendChild(divForm);
		divForm.appendChild(textarea);
		divForm.appendChild(botonTar)
		
	
	}

	botonLi.addEventListener('click', crearTarjeta);
}

btnAgregar.addEventListener('click', añadirLista);



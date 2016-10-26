//Variables
var tarea = document.getElementById('tarea'); // Textarea
var btnAgregar = document.getElementById('btnAgregar'); //boton
var lista = document.getElementById('lista');//ul
//FUNCIONes
var agregarTarea = function (){

	if(tarea.value==""){
		tarea.setAttribute('placeholder', 'Debes ingresar una tarea');
/*En lugar de mostrar un span de validacion incorrecta, mostrara un placeholder en el mismo input
Siempre y cuando el campo este llenado.*/
		return false;
	}
	console.log("voy agregar tarea");
	var tareaNueva = document.createElement('ol');//crea un elemento ol
	var input = document.createElement('input');//crea elemento input
		input.type = 'checkbox';//con un atributo type="checkbox"(.type sustituyo a setAttribute)
	var tareaHecha = document.createElement('i');//crea elemento i para el icono
		tareaHecha.className = 'hecho fa fa-trash-o fa-lg';//y les da estas clases(.className)
		tareaHecha.setAttribute("aria-hidden", "true"); //ademas del atributo aria-hidden="true"(no funciono el .aria-hidden)
	var contenido = document.createTextNode(tarea.value); //TextNode hace del texto un nodo, para poder manejarlo desde JS. En este caso el texto que el usuario ingrese en el textarea.

		tareaNueva.appendChild(input);//incrusta el input en el ol
		tareaNueva.appendChild(contenido);//incrusta el texto del textarea en el ol
		tareaNueva.appendChild(tareaHecha);//incrusta el i en el ol.

//EVENTOs
	input.onclick = function(){
/*Cuando hagan click en el input (osea marquen la casita del checkbox) ejecuta esta funcion:
Si el input ha sido marcado al elemento que anida el texto del textarea osea el ol ponle un atributo class="tachado"
(en el css esta esa clase dada con una decoracion para tachar el texto, lista para ser activada) si no ponle un atributo class="" */
		if(input.checked == true){
			contenido.parentElement.setAttribute("class","tachado");
		}else{
			contenido.parentElement.setAttribute("class","");
		}
	};
/*Cuando hagan click en el i(bote de basura) ejecuta esta funcion:
al ol agregale un atributo de estilo display = "none" para "borrarlo" en realidad esta escondiendo la tarea por ahi en algun lugar */
	tareaHecha.addEventListener("click", function(){
		console.log("click en el bote")
		tareaNueva.style.display = "none";
	});
	
	tarea.value = "";//limpia el valor del textarea.
	lista.appendChild(tareaNueva);//incrusta el ol en el ul
};
	
btnAgregar.addEventListener('click', agregarTarea);
//cuando den click en el boton para Agregar Tarea ejecuta la funcion agregarTarea(explicada arriba)
//FIN *_*
 
	
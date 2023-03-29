
let botonIgual = document.getElementById("botonIgual");
let botonLimpiar = document.getElementById("botonLimpiar");
let salida = document.getElementById("salida");
let salidaHistorial = document.getElementById("historialResultados")
let historial = new Array(3)

//Funcion para limpiar los imputs y la display de resultado.
function limpiarInputs() {
  let limpiarPeso = document.getElementById('pesoProducto');
  let limpiarPrecio = document.getElementById('precioProducto');
  limpiarPeso.value = " ";
  limpiarPrecio.value = " ";
  salida.innerHTML = " ";
}

//seccion de botones
botonIgual.addEventListener("click", calcularPrecioPorKilo);
botonLimpiar.addEventListener("click", limpiarInputs);

//controlador del selector de funciones
let select_Funcion = document.querySelector("#select_Funcion");
let funcion_seleccionada = select_Funcion.options[select_Funcion.selectedIndex].value;

//detector  de cambios en el selector de funciones
select_Funcion.addEventListener("change", function () {
  funcion_seleccionada = select_Funcion.options[select_Funcion.selectedIndex].value;
});

//controlador del selector de cantidades
let select_Cantidad = document.querySelector("#select_Cantidad");
let cantidad_seleccionada = select_Cantidad.options[select_Cantidad.selectedIndex].value;

//detector  de cambios en el selector de cantidades
select_Cantidad.addEventListener("change", function () {
  cantidad_seleccionada = select_Cantidad.options[select_Cantidad.selectedIndex].value;
});

//Controlador de unidades para el output de salida.
function cambio_Salida_Unidad() {
  if (cantidad_seleccionada == "gramos" || cantidad_seleccionada == "kilogramos") {
    return "/kg."
  } else {
    return "/L."
  }
}

//funcion para almacenar el historial
function agregarHistorial() {
  let nuevoElemento = document.getElementById("salida").value;
  // Desplazar los elementos existentes hacia la derecha
  for (var i = historial.length - 1; i > 0; i--) {
    historial[i] = historial[i - 1];
  }
  // Agregar el nuevo elemento en la primera posición
  historial[0] = nuevoElemento;

  //borrar ultimo elemento de la lista
  let historialLista = document.getElementById("historial_lista");
  if (historialLista.childElementCount >= 3) {
    historialLista.removeChild(historialLista.lastElementChild);
  }
  //inserta el nuevo elemento a la lista de historial
  let li = document.createElement("li");
  li.textContent = nuevoElemento;
  historialLista.insertBefore(li, historialLista.firstChild);
}
//funcion para calcular precios
function calcularPrecioPorKilo() {
  let pesoProducto = parseFloat(document.getElementById("pesoProducto").value);
  let precioProducto = parseFloat(document.getElementById("precioProducto").value);
  //Validador de datos.
  if (pesoProducto === "" || pesoProducto === null || precioProducto === "" || precioProducto === null || isNaN(pesoProducto) || isNaN(precioProducto)) {
    return;
  }

  if (funcion_seleccionada == "precioPorKilo") {
    //Funcion para precio por Kilo
    if (cantidad_seleccionada == "gramos" || cantidad_seleccionada == "mililitros") {
      let precioPorKilo = (precioProducto * 1000) / pesoProducto;
      salida.innerHTML = "$ " + precioPorKilo.toFixed(2) + cambio_Salida_Unidad();
      agregarHistorial();
    } else {
      let precioPorKilo = precioProducto / pesoProducto;
      salida.innerHTML = "$ " + precioPorKilo.toFixed(2) + cambio_Salida_Unidad();
      agregarHistorial();
    }
  } else {
    //Funcion para báscula.
    if (cantidad_seleccionada == "gramos" || cantidad_seleccionada == "mililitros") {
      let precioDeBascula = (precioProducto / 1000) * pesoProducto;
      salida.innerHTML = "Pagarás $ " + precioDeBascula.toFixed(2);
      agregarHistorial();
    } else {
      let precioDeBascula = precioProducto * pesoProducto;
      salida.innerHTML = "Pagarás $ " + precioDeBascula.toFixed(2);
      agregarHistorial();
    }
  }
}

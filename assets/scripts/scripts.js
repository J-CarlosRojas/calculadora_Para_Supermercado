
let botonIgual = document.getElementById("botonIgual");
let botonLimpiar = document.getElementById("botonLimpiar");
let salida = document.getElementById("salida");


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
  console.log("Nueva función seleccionada: " + funcion_seleccionada);
});

//controlador del selector de cantidades
let select_Cantidad = document.querySelector("#select_Cantidad");
let cantidad_seleccionada = select_Cantidad.options[select_Cantidad.selectedIndex].value;

//detector  de cambios en el selector de cantidades
select_Cantidad.addEventListener("change", function () {
  cantidad_seleccionada = select_Cantidad.options[select_Cantidad.selectedIndex].value;
  console.log("Nueva cantidad seleccionada: " + cantidad_seleccionada);
});

//Controlador de unidades para el output de salida.
let salida_Unidad;
function cambio_Salida_Unidad() {
  if (cantidad_seleccionada == "gramos" || cantidad_seleccionada == "kilogramos") {
    salida_Unidad = "/kg."
  } else {
    salida_Unidad = "/lt."
  }
}

//funcion para calcular precios
function calcularPrecioPorKilo() {
  let pesoProducto = parseFloat(document.getElementById("pesoProducto").value);
  let precioProducto = parseFloat(document.getElementById("precioProducto").value);

  if (cantidad_seleccionada == "gramos" || cantidad_seleccionada == "mililitros") {
    cambio_Salida_Unidad()
    let precioPorKilo = (precioProducto * 1000) / pesoProducto;
    salida.innerHTML = "$ " + precioPorKilo.toFixed(2) + salida_Unidad;
  } else {
    cambio_Salida_Unidad()
    let precioPorKilo = precioProducto / pesoProducto;
    salida.innerHTML = "$ " + precioPorKilo.toFixed(2) + salida_Unidad;
  }
}


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
function cambio_Salida_Unidad() {
  if (cantidad_seleccionada == "gramos" || cantidad_seleccionada == "kilogramos") {
    return "/kg."
  } else {
    return "/lt."
  }
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
    } else {
      let precioPorKilo = precioProducto / pesoProducto;
      salida.innerHTML = "$ " + precioPorKilo.toFixed(2) + cambio_Salida_Unidad();
    }
  } else {
    //Funcion para báscula.
    if (cantidad_seleccionada == "gramos" || cantidad_seleccionada == "mililitros") {
      let precioDeBascula = (precioProducto / 1000) * pesoProducto;
      salida.innerHTML = "Pagarás $ " + precioDeBascula.toFixed(2);
    } else {
      let precioDeBascula = precioProducto * pesoProducto;
      salida.innerHTML = "Pagarás $ " + precioDeBascula.toFixed(2);
    }
  }
}

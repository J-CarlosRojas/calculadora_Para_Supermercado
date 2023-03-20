
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

//controlador del selector
let select_Cantidad = document.querySelector("#select_Cantidad");
let cantidad_seleccionada = select_Cantidad.options[select_Cantidad.selectedIndex];

//detector  de cambios en el selector
select_Cantidad.addEventListener("change", function () {
  cantidad_seleccionada = select_Cantidad.options[select_Cantidad.selectedIndex].value;
  console.log("Nueva cantidad seleccionada: " + cantidad_seleccionada);
});

//funcion para calcular precios
function calcularPrecioPorKilo() {
  let pesoProducto = parseFloat(document.getElementById("pesoProducto").value);
  let precioProducto = parseFloat(document.getElementById("precioProducto").value);

  if (cantidad_seleccionada.value == "gramos") {
    let precioPorKilo = (precioProducto * 1000) / pesoProducto;
    salida.innerHTML = precioPorKilo.toFixed(2);
  } else {
    pesoProducto *= 1000;
    let precioPorKilo = (precioProducto * 1000) / pesoProducto;
    salida.innerHTML = precioPorKilo.toFixed(2);
  }
}

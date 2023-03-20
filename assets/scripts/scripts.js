
let botonIgual = document.getElementById("botonIgual");
let botonLimpiar = document.getElementById("botonLimpiar");
let salida = document.getElementById("salida");


  function limpiarInputs() {
    let limpiarPeso = document.getElementById('pesoProducto');
    let limpiarPrecio = document.getElementById('precioProducto');

    limpiarPeso.value = " ";
    limpiarPrecio.value = " ";

  }

  //seccion de botones
botonIgual.addEventListener("click", calcularPrecioPorKilo);
botonLimpiar.addEventListener("click", limpiarInputs);

//controlador del selector
let select_Cantidad = document.querySelector("#select_Cantidad");
let cantidad_seleccionada = select_Cantidad.options[select_Cantidad.selectedIndex];

//detector  de cambios en el selector
select_Cantidad.addEventListener("change", function() {
  cantidad_seleccionada = select_Cantidad.options[select_Cantidad.selectedIndex].value;
  console.log("Nueva cantidad seleccionada: " + cantidad_seleccionada);
});



function calcularPrecioPorKilo() {

  if (cantidad_seleccionada == "gramos"){
    
    let pesoProducto = parseFloat(document.getElementById("pesoProducto").value);
    console.log(pesoProducto);
    
    let precioProducto = parseFloat(document.getElementById("precioProducto").value);
    console.log(precioProducto);

    let precioPorKilo = (precioProducto*1000)/pesoProducto;
    console.log(precioPorKilo);

    salida.innerHTML = precioPorKilo.toFixed(2);
  
  } else {

    console.log("selecionado en kilos")

  }
  

}

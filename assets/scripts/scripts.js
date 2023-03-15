
let botonIgual = document.getElementById("botonIgual");
let botonLimpiar = document.getElementById("botonLimpiar");
let salida = document.getElementById("salida");

function calcularPrecioPorKilo() {
    let pesoProducto = parseFloat(document.getElementById("pesoProducto").value);
    console.log(pesoProducto);
    
    let precioProducto = parseFloat(document.getElementById("precioProducto").value);
    console.log(precioProducto);

    let precioPorKilo = (precioProducto*1000)/pesoProducto;
    console.log(precioPorKilo);

    salida.innerHTML = precioPorKilo.toFixed(2);
  }

  function limpiarInputs() {
    let limpiarPeso = document.getElementById('pesoProducto');
    let limpiarPrecio = document.getElementById('precioProducto');

    limpiarPeso.value = " ";
    limpiarPrecio.value = " ";

  }

botonIgual.addEventListener("click", calcularPrecioPorKilo);
botonLimpiar.addEventListener("click", limpiarInputs);

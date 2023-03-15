
let botonIgual = document.getElementById("botonIgual");
let salida = document.getElementById("salida");

function calcularPrecioPorKilo() {
    let pesoProducto = document.getElementById("pesoProducto").value;
    console.log(pesoProducto);
    let precioProducto = document.getElementById("precioProducto").value;
    console.log(precioProducto);

    let precioPorKilo = (precioProducto*1000)/pesoProducto;
    console.log(precioPorKilo);

    salida.innerHTML = precioPorKilo
  }

botonIgual.addEventListener("click", calcularPrecioPorKilo);




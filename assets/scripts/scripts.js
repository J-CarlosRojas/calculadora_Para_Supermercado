
let botonIgual = document.getElementById("botonIgual");
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

botonIgual.addEventListener("click", calcularPrecioPorKilo);




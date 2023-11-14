precio = 300000; 
var cantidad = 0;
var total= 0; 

// Mostrando el precio base o inicial del producto
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio



// listener botón + y -

document.querySelector(".btnsumar").addEventListener("click", sumarcantidad);
document.querySelector(".btnrestar").addEventListener("click", restarcantidad);


// Función que se ejecuta cuando se hace click en el botón +

function sumarcantidad(){

    cantidad = cantidad + 1;
    var q = document.querySelector(".cantidad");
    q.innerHTML = cantidad

// Mostrando el precio total producto del base * cantidad
valortotal = document.querySelector(".valor-total");
valortotal.innerHTML = precio * cantidad;

}

// Función que se ejecuta cuando se hace click en el botón -

function restarcantidad(){

    cantidad = cantidad - 1;
    var q = document.querySelector(".cantidad");
    q.innerHTML = cantidad

    // Mostrando el precio total producto del base * cantidad
valortotal = document.querySelector(".valor-total");
valortotal.innerHTML = precio * cantidad;
    
    }


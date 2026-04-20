const input = document.querySelector('#productoInput');
const btn = document.querySelector('#btnAgregar');
const lista = document.querySelector('#listaProductos');
const error = document.querySelector('#mensajeError');
const contador = document.querySelector('#contador');

let total = 0;

btn.addEventListener('click', () => {
    if (input.value === "") {
        error.textContent = "Falta ingresar un producto";
        return;
    }

    error.textContent = "";
    total++;
    contador.textContent = total;

    const li = document.createElement('li');
    li.textContent = input.value + " ";
    
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener('click', () => {
        li.remove();
        total--;
        contador.textContent = total;
    });

    li.appendChild(btnEliminar);
    lista.appendChild(li);
    input.value = ""; // Vaciamos el input
});
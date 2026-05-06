"use strict";
const inputBusqueda = document.getElementById('input-busqueda');
const btnBuscar = document.getElementById('btn-buscar');
const divError = document.getElementById('mensaje-error');
const divCargando = document.getElementById('cargando');
const contenedorResultados = document.getElementById('contenedor-resultados');

async function buscarLibros() {
    const query = inputBusqueda.value.trim();
    if (query === "") {
        divError.textContent = "Por favor, ingresa un título o autor para buscar.";
        divError.classList.remove('d-none');
        contenedorResultados.innerHTML = "";
        return;
    }
    divError.classList.add('d-none');
    divCargando.classList.remove('d-none');
    contenedorResultados.innerHTML = "";
    try {
        const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        const primeros10 = data.docs.slice(0, 10);
        if (primeros10.length === 0) {
            contenedorResultados.innerHTML = '<div class="col-12"><p class="text-center text-muted">No se encontraron libros para esa busqueda.</p></div>';
            return;
        }
        primeros10.forEach(libro => {
            const col = document.createElement('div');
            col.className = "col-12 col-md-4 mb-4";

            const autor = libro.author_name ? libro.author_name.join(', ') : "Autor desconocido";
            const anio = libro.first_publish_year ? libro.first_publish_year : "Año desconocido";

            col.innerHTML = `
                    <div class="card h-100 shadow-sm">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title fw-bold">${libro.title}</h5>
                            <p class="card-text text-muted mb-1"><small>${autor}</small></p>
                            <p class="card-text text-muted"><small>${anio}</small></p>
                        
                            <a href="libro.html" class="btn btn-outline-primary mt-auto">Ver detalle</a>
                        </div>
                    </div>
                `;
            contenedorResultados.appendChild(col);
        });
    }
    catch (error) {
        console.error(error);
        divError.textContent = "Hubo un problema al conectar con Open Library.";
        divError.classList.remove('d-none');
    }
    finally {
        divCargando.classList.add('d-none');
    }
}
if (btnBuscar) {
    btnBuscar.addEventListener('click', buscarLibros);
}
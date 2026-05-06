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
        divError.classList.remove('oculto');
        contenedorResultados.innerHTML = "";
        return;
    }
    divError.classList.add('oculto');
    divCargando.classList.remove('oculto');
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
            contenedorResultados.innerHTML = "<p>No se encontraron libros para esa búsqueda.</p>";
            return;
        }
        primeros10.forEach(libro => {
            const tarjeta = document.createElement('div');
            tarjeta.className = "tarjeta";
            const autor = libro.author_name ? libro.author_name.join(', ') : "Autor desconocido";
            const anio = libro.first_publish_year ? libro.first_publish_year : "Año desconocido";
            tarjeta.innerHTML = `
                <h3>${libro.title}</h3>
                <p><strong>Autor(es):</strong> ${autor}</p>
                <p><strong>Año de publicación:</strong> ${anio}</p>
            `;
            contenedorResultados.appendChild(tarjeta);
        });
    }
    catch (error) {
        console.error(error);
        divError.textContent = "Hubo un problema al conectar con Open Library.";
        divError.classList.remove('oculto');
    }
    finally {
        divCargando.classList.add('oculto');
    }
}
btnBuscar.addEventListener('click', buscarLibros);

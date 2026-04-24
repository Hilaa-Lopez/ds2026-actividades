interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
}

let catalogo: Libro[] = [
    { isbn: "111", titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", precio: 25000, disponible: true },
    { isbn: "222", titulo: "Clean Code", autor: "Robert C. Martin", precio: 32000, disponible: false },
    { isbn: "333", titulo: "1984", autor: "George Orwell", precio: 15000, disponible: true }
];

const contenedorLibros = document.getElementById('contenedor-libros') as HTMLDivElement;
const contenedorEstadisticas = document.getElementById('estadisticas') as HTMLDivElement;
const errorForm = document.getElementById('errorForm') as HTMLDivElement;

const inTitulo = document.getElementById('in-titulo') as HTMLInputElement;
const inAutor = document.getElementById('in-autor') as HTMLInputElement;
const inPrecio = document.getElementById('in-precio') as HTMLInputElement;
const inDisponible = document.getElementById('in-disponible') as HTMLInputElement;


function validarFormulario(): Libro | null {
    const titulo = inTitulo.value.trim();
    const autor = inAutor.value.trim();
    const precio = parseFloat(inPrecio.value);
    const disponible = inDisponible.checked;

    if (titulo === "" || autor === "") {
        return null;
    }
    if (isNaN(precio) || precio <= 0) {
        return null;
    }

    const nuevoLibro: Libro = {
        isbn: "AUTO-" + Date.now(), 
        titulo: titulo,
        autor: autor,
        precio: precio,
        disponible: disponible
    };

    return nuevoLibro;
}

function agregarLibro(libro: Libro): void {
    catalogo.push(libro); 
    renderizar(catalogo); 
}

function eliminarLibro(isbnParaBorrar: string): void {
    catalogo = catalogo.filter(libro => libro.isbn !== isbnParaBorrar);
    renderizar(catalogo); 
}

function renderizar(librosAMostrar: Libro[]): void {
    contenedorLibros.innerHTML = "";
    
    librosAMostrar.forEach(libro => {
        const divLibro = document.createElement('div');
        divLibro.innerHTML = `
            <h3>${libro.titulo}</h3>
            <p><strong>Autor:</strong> ${libro.autor}</p>
            <p><strong>Precio:</strong> $${libro.precio}</p>
            <p><strong>Estado:</strong> ${libro.disponible ? "Disponible" : "Agotado"}</p>
            <button class="btn-eliminar">Eliminar</button>
            <hr>
        `;
        
        const btnEliminar = divLibro.querySelector('.btn-eliminar') as HTMLButtonElement;
        btnEliminar.addEventListener('click', () => {
            eliminarLibro(libro.isbn);
        });

        contenedorLibros.appendChild(divLibro);
    });

    contenedorEstadisticas.innerHTML = `<p><em>Total de libros mostrados: ${librosAMostrar.length}</em></p>`;
}

const btnAgregar = document.getElementById('btn-agregar') as HTMLButtonElement;

btnAgregar.addEventListener('click', () => {
    const resultadoValidacion = validarFormulario();

    if (resultadoValidacion === null) {
        errorForm.textContent = "Por favor, completa todos los campos y asegúrate de que el precio sea mayor a 0.";
        return;
    }

    errorForm.textContent = ""; 
    agregarLibro(resultadoValidacion);

    inTitulo.value = "";
    inAutor.value = "";
    inPrecio.value = "";
    inDisponible.checked = true;
});

renderizar(catalogo);
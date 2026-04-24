interface Libro {
    isbn: string;
    titulo: string;
    autor: string;
    precio: number;
    disponible: boolean;
    genero?: string;
}

class GestorCatalogo {
    public libros: Libro[];

    constructor(librosIniciales: Libro[]) {
        this.libros = librosIniciales; 
    }

    buscarPorAutor(autorBuscado: string): Libro[] {
        return this.libros.filter(libro => 
            libro.autor.toLowerCase().includes(autorBuscado.toLowerCase())
        );
    }

    librosDisponibles(): Libro[] {
        return this.libros.filter(libro => libro.disponible === true);
    }

    precioPromedio(listaParaCalcular: Libro[]): number {
        if (listaParaCalcular.length === 0) return 0;
        
        const sumaTotal = listaParaCalcular.reduce((acumulador, libro) => acumulador + libro.precio, 0);
        return sumaTotal / listaParaCalcular.length;
    }
}

const datosCrudos: Libro[] = [
    { isbn: "111", titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", precio: 25000, disponible: true, genero: "Fantasía" },
    { isbn: "222", titulo: "Clean Code", autor: "Robert C. Martin", precio: 32000, disponible: false, genero: "Programación" },
    { isbn: "333", titulo: "El Hobbit", autor: "J.R.R. Tolkien", precio: 18000, disponible: true },
    { isbn: "444", titulo: "1984", autor: "George Orwell", precio: 15000, disponible: false, genero: "Ciencia Ficción" },
    { isbn: "555", titulo: "Patrones de Diseño", autor: "Gang of Four", precio: 40000, disponible: true, genero: "Programación" }
];

const miCatalogo = new GestorCatalogo(datosCrudos);


const contenedorLibros = document.getElementById('contenedor-libros') as HTMLDivElement;
const contenedorEstadisticas = document.getElementById('estadisticas') as HTMLDivElement;
const inputAutor = document.getElementById('input-autor') as HTMLInputElement;
const btnFiltrar = document.getElementById('btn-filtrar') as HTMLButtonElement;
const btnDisponibles = document.getElementById('btn-disponibles') as HTMLButtonElement;
const btnTodos = document.getElementById('btn-todos') as HTMLButtonElement;

function renderizar(librosAMostrar: Libro[]): void {
    contenedorLibros.innerHTML = "";
    
    librosAMostrar.forEach(libro => {
        const divLibro = document.createElement('div');
        divLibro.innerHTML = `
            <h3>${libro.titulo}</h3>
            <p><strong>Autor:</strong> ${libro.autor}</p>
            <p><strong>Precio:</strong> $${libro.precio}</p>
            <p><strong>Estado:</strong> ${libro.disponible ? "Disponible" : "Agotado"}</p>
            <hr>
        `;
        contenedorLibros.appendChild(divLibro);
    });

    const promedio = miCatalogo.precioPromedio(librosAMostrar);
    contenedorEstadisticas.innerHTML = `
        <p><em>Mostrando ${librosAMostrar.length} libros | Precio promedio: $${promedio.toFixed(2)}</em></p>
    `;
}

btnFiltrar.addEventListener('click', () => {
    const autor = inputAutor.value;
    renderizar(miCatalogo.buscarPorAutor(autor));
});

btnDisponibles.addEventListener('click', () => {
    renderizar(miCatalogo.librosDisponibles());
});

btnTodos.addEventListener('click', () => {
    inputAutor.value = ""; 
    renderizar(miCatalogo.libros); 
});

renderizar(miCatalogo.libros);
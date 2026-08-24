import { prisma } from "../src/config/prisma";

const libros = [
    { titulo: "El Señor de Los Anillos", autor: "J.R.R. Tolkien", precio: 15000, imagen: "img/el_senor_anillos.webp", disponible: true },
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", precio: 4500, imagen: "img/principito.png", disponible: true },
    { titulo: "El Eternauta", autor: "Héctor Germán Oesterheld", precio: 12000, imagen: "img/el_eternauta.webp", disponible: true }
];

const autores = [
    { nombre: "J.R.R. Tolkien", nacionalidad: "Británica" },
    { nombre: "Julio Cortázar", nacionalidad: "Argentina" }
];

async function main() {
    await prisma.libro.createMany({ data: libros });
    await prisma.autor.createMany({ data: autores });
    console.log("¡Base de datos sembrada con éxito!");
}

main();
import { prisma } from "../src/config/prisma";

const autores = [
    { nombre: "Antoine de Saint-Exupéry", nacionalidad: "Francia" },
    { nombre: "J.R.R. Tolkien", nacionalidad: "Británica" },
    { nombre: "Héctor Germán Oesterheld", nacionalidad: "Argentina" }
];

const categorias = [
    { nombre: "Novela" },
    { nombre: "Infantil" },
    { nombre: "Ciencia Ficción" }
];

const libros = [
    { titulo: "El Principito", autor: "Antoine de Saint-Exupéry", precio: 4500, imagen: "img/principito.png", disponible: true, cats: ["Infantil"] },
    { titulo: "El Señor de Los Anillos", autor: "J.R.R. Tolkien", precio: 15000, imagen: "img/el_senor_anillos.webp", disponible: true, cats: ["Novela"] },
    { titulo: "El Eternauta", autor: "Héctor Germán Oesterheld", precio: 12000, imagen: "img/el_eternauta.webp", disponible: true, cats: ["Ciencia Ficción"] }
];

async function main() {
    await prisma.autor.createMany({ data: autores });
    await prisma.categoria.createMany({ data: categorias });

    for (const { autor, cats, ...datos } of libros) {
        await prisma.libro.create({
            data: {
                ...datos,
                autor: { connect: { nombre: autor } },
                categorias: { connect: cats.map(nombre => ({ nombre })) }
            }
        });
    }
    console.log("¡Base sembrada con éxito!");
}

main();
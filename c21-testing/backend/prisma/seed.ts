import { prisma } from "../src/config/prisma";
import bcrypt from "bcrypt";

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

const usuarios = [
    {
        email: "admin@libreria.test",
        nombre: "Admin",
        rol: "ADMIN" as const,
        password: "Admin1234"
    },
    {
        email: "cliente@libreria.test",
        nombre: "Cliente",
        rol: "CLIENTE" as const,
        password: "Cliente1234"
    }
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
    for (const { password, ...datos } of usuarios) {
        await prisma.usuario.upsert({
            where: {
                email: datos.email
            },
        update: {},
        create: {
            ...datos,
            passwordHash: await bcrypt.hash(password, 10)
            }
        });
    }
    console.log("¡Base sembrada con éxito!");
}

main();
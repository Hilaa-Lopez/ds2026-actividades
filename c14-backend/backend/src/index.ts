import express from "express";

const app = express();
const PORT = 3000;

interface Libro {
    id: number;
    titulo: string;
    autor: string;
    precio: number;
    imagen: string;
    disponible: boolean;
}

const libros: Libro[] = [
    {
    id: 1,
    titulo: "El Señor de Los Anillos",
    autor: "J.R.R. Tolkien",
    precio: 15000,
    imagen: "img/el_senor_anillos.webp",
    disponible: true,
    },
    {
    id: 2,
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    precio: 4500,
    imagen: "img/principito.png",
    disponible: true,
    },
    {
    id: 3,
    titulo: "El Eternauta",
    autor: "Héctor Germán Oesterheld",
    precio: 12000,
    imagen: "img/el_eternauta.webp",
    disponible: true,
    },
];

// Endpoint GET /libros
app.get("/libros", (_req, res) => {
    res.json(libros);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
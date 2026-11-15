export interface Autor {
    id: number;
    nombre: string;
    nacionalidad: string;
}

export interface LibroProps {
    id: number;
    titulo: string;
    imagen: string;
    autor: {
        id: number;
        nombre: string;
        nacionalidad: string;
    };
}
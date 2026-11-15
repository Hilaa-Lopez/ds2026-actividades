import { useParams } from 'react-router-dom';

export default function LibroDetalle() {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="container mt-4">
            <h2>Detalle del Libro</h2>
            <p className="fs-5">Estás viendo la información del libro con ID: <strong>{id}</strong></p>
        </div>
    );
}
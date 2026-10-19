import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SinPermiso() {
    return (
        <div className="container mt-5 text-center">
            <Alert variant="warning">
                <h4>Acceso Denegado</h4>
                <p>No tenés permiso para acceder a esta operación.</p>
                <Link to="/catalogo" className="btn btn-primary mt-3">Volver al catálogo</Link>
            </Alert>
        </div>
    );
}
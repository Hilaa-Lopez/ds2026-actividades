import { Link } from 'react-router-dom';

export function Header() {
    return (
        <header className="bg-primary text-white text-center py-5 mb-5">
            <div className="container">
                <h1 className="display-4 fw-bold">Bienvenido a la Libreria de Hila</h1>
                <p className="lead mb-4">Encontra tu Libro</p>
                
                <Link to="/catalogo" className="btn btn-light btn-lg text-primary fw-bold">
                    Ir al Catalogo
                </Link>
                
            </div>
        </header>
    );
}
import { Navigate, Outlet } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import type { Rol } from '../types/sesionType';

export function PrivateRoute({ rol }: { rol?: Rol }) {
    const { usuario, cargando } = useAuth();

    // 1. ¿Ya sé quién sos?
    if (cargando) return <Spinner animation="border" className="d-block mx-auto mt-5" />;
    
    // 2. ¿Estás logueado? (Simula el 401) - Usamos replace para no atrapar al usuario en el historial
    if (!usuario) return <Navigate to="/login" replace />;
    
    // 3. ¿Tenés el rol necesario? (Simula el 403)
    if (rol && usuario.rol !== rol) return <Navigate to="/sin-permiso" replace />;
    
    // Si pasaste todas las pruebas, renderiza el componente hijo
    return <Outlet />;
}
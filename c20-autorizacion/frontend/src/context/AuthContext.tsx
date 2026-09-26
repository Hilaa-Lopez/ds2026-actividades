import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { apiFetch } from '../services/api';
import { obtenerToken, guardarToken, borrarToken } from '../services/sesion';
import type { Usuario, Rol, Credenciales, Sesion } from '../types/sesionType';

interface AuthContextType {
    usuario: Usuario | null;
    cargando: boolean;
    estaAutenticado: boolean;
    tieneRol: (rol: Rol) => boolean;
    login: (credenciales: Credenciales) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const [cargando, setCargando] = useState(obtenerToken() !== null);

    const logout = () => {
        borrarToken();
        setUsuario(null);
    };

    useEffect(() => {
        if (!obtenerToken()) return;
        
        apiFetch<Usuario>('/auth/yo')
            .then(setUsuario)
            .catch(() => logout())
            .finally(() => setCargando(false));
    }, []);

    useEffect(() => {
        const handleLogout = () => logout();
        window.addEventListener('sesion-expirada', handleLogout);
        return () => window.removeEventListener('sesion-expirada', handleLogout);
    }, []);

    const login = async (credenciales: Credenciales) => {
        const sesion = await apiFetch<Sesion>('/auth/login', { 
            method: 'POST', 
            body: JSON.stringify(credenciales) 
        });
        guardarToken(sesion.token);
        setUsuario(sesion.usuario);
    };

    const value: AuthContextType = {
        usuario,
        cargando,
        estaAutenticado: usuario !== null,
        tieneRol: (rol) => usuario?.rol === rol,
        login,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
    return context;
}
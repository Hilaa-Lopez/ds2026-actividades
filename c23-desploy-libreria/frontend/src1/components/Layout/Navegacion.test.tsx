import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Navegacion } from './Navegacion'; 
import { AuthContext } from '../../context/AuthContext';
import type { Rol, Usuario } from '../../types/sesionType';

function renderHeader(usuario: Usuario | null) {
    const auth = {
    usuario,
    cargando: false,
    estaAutenticado: usuario !== null,
    tieneRol: (rol: Rol) => usuario?.rol === rol,
    login: vi.fn(),
    logout: vi.fn(),
    };

    return render(
        <MemoryRouter>
        <AuthContext.Provider value={auth as any}>
            <Navegacion />
        </AuthContext.Provider>
        </MemoryRouter>
    );
}

describe('Componente Navegacion', () => {
    it('CLIENTE NO ve el link "Nuevo Libro"', () => {
        renderHeader({ id: 2, email: 'cliente@libreria.test', nombre: 'Cliente', rol: 'CLIENTE' });
        expect(screen.queryByText('Nuevo Libro')).not.toBeInTheDocument();
    });
});
import type { ReactNode } from 'react';
import { Navegacion } from './Navegacion';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navegacion />
            <Header />
            
            {children}
            
            <Footer />
        </div>
    );
}
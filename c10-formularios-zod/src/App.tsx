import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Home from './pages/home';
import Catalogo from './pages/catalogo';
import LibroDetalle from './pages/libroDetalle';
import LibroNuevo from './pages/libroNuevo';
import type { LibroProps } from './types/libro';
import { useState } from 'react';

const libroIniciales: LibroProps[] = [
  { id: 1, titulo: "El Señor de Los Anillos", autor: "J.R.R. Tolkien", imagen: "img/el_señor_anillos.webp", precio: 15000, disponible: true },
  { id: 2, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", imagen: "img/principito.png", precio: 8000, disponible: true }
];

function App() {

  const [libros, setLibros] = useState<LibroProps[]>(libroIniciales);
  const agregarLibro = (nuevo: LibroProps) => {
    setLibros([...libros, nuevo]);
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo libros={libros}/>} />
        <Route path="/libros/:id" element={<LibroDetalle />} />
        <Route path="/libros/nuevo" element={<LibroNuevo onAgregar={agregarLibro} />} />
      </Routes>
    </Layout>
  );
}

export default App;
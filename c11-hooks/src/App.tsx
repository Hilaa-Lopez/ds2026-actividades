import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Home from './pages/home';
import Catalogo from './pages/catalogo';
import LibroDetalle from './pages/libroDetalle';
import LibroNuevo from './pages/libroNuevo';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/libros/:id" element={<LibroDetalle />} />
        <Route path="/libros/nuevo" element={<LibroNuevo onAgregar={() => console.log('Alta en pausa')} />} />
      </Routes>
    </Layout>
  );
}

export default App;
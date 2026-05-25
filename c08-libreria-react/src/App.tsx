import { Row, Col } from 'react-bootstrap';
import { Navegacion } from './components/Navegacion';
import { Header } from './components/Header';
import { LibroCard } from './components/LibroCard';
import { Footer } from './components/Footer';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      <Navegacion />
      <Header />

      <main className="container mb-5 flex-grow-1">
        <h2 className="text-center mb-4">Libros Destacados</h2>

        <Row className="g-4">
          <Col xs={12} md={4}>
            <LibroCard 
              titulo="El Señor de Los Anillos" 
              autor="J.R.R. Tolkien" 
              imagen="img/el_señor_anillos.webp" 
            />
          </Col>
          <Col xs={12} md={4}>
            <LibroCard 
              titulo="El Principito" 
              autor="Antoine de Saint-Exupéry" 
              imagen="img/principito.png" 
            />
          </Col>
          <Col xs={12} md={4}>
            <LibroCard 
              titulo="El Eternauta" 
              autor="Héctor Germán Oesterheld" 
              imagen="img/el_eternauta.webp" 
            />
          </Col>
          <Col xs={12} md={4}>
            <LibroCard 
              titulo="Don Quijote de la Mancha" 
              autor="Miguel de Cervantes" 
              imagen="img/don-quijote.jpg" 
            />
          </Col>
          <Col xs={12} md={4}>
            <LibroCard 
              titulo="Fahrenheit 451" 
              autor="Ray Bradbury" 
              imagen="img/451.jpg" 
            />
          </Col>
          <Col xs={12} md={4}>
            <LibroCard 
              titulo="Coraline" 
              autor="Neil Gaiman" 
              imagen="img/coraline.jpg" 
            />
          </Col>
        </Row>
      </main>

      <Footer />

    </div>
  );
}

export default App;
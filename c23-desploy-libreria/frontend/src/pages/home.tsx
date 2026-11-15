import { Row, Col } from 'react-bootstrap';
import { LibroCard } from '../components/LibroCard';

export default function Home() {
  return (
    <main className="container mb-5 flex-grow-1">
      <h2 className="text-center mb-4">Libros Destacados</h2>
      <Row className="g-4">
        <Col xs={12} md={4}>
          <LibroCard
            id={1}
            titulo="El Señor de Los Anillos"
            autor={{ id: 1, nombre: 'J.R.R. Tolkien', nacionalidad: 'Británica' }}
            imagen="/img/el_senor_anillos.webp"
          />
        </Col>
        <Col xs={12} md={4}>
          <LibroCard
            id={2}
            titulo="El Principito"
            autor={{ id: 2, nombre: 'Antoine de Saint-Exupéry', nacionalidad: 'Francesa' }}
            imagen="/img/principito.png"
          />
        </Col>
        <Col xs={12} md={4}>
          <LibroCard
            id={3}
            titulo="El Eternauta"
            autor={{ id: 3, nombre: 'Héctor Germán Oesterheld', nacionalidad: 'Argentina' }}
            imagen="/img/el_eternauta.webp"
          />
        </Col>
        <Col xs={12} md={4}>
          <LibroCard
            id={4}
            titulo="Don Quijote de la Mancha"
            autor={{ id: 4, nombre: 'Miguel de Cervantes', nacionalidad: 'Española' }}
            imagen="/img/don-quijote.jpg"
          />
        </Col>
        <Col xs={12} md={4}>
          <LibroCard
            id={5}
            titulo="Fahrenheit 451"
            autor={{ id: 5, nombre: 'Ray Bradbury', nacionalidad: 'Estadounidense' }}
            imagen="/img/451.jpg"
          />
        </Col>
        <Col xs={12} md={4}>
          <LibroCard
            id={6}
            titulo="Coraline"
            autor={{ id: 6, nombre: 'Neil Gaiman', nacionalidad: 'Británica' }}
            imagen="/img/coraline.jpg"
          />
        </Col>
      </Row>
    </main>
  );
}
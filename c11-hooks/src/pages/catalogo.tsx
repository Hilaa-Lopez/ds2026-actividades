import { Spinner, Alert, Row, Col } from 'react-bootstrap';
import { LibroCard } from '../components/LibroCard';
import { useFetch } from '../hooks/useFetch';
import type { LibroProps } from '../types/libro';

export default function Catalogo() {
    const { data: libros, loading, error } = useFetch<LibroProps[]>('/libros.json');

    if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;
    if (error) return <Alert variant="danger" className="mt-4">{error}</Alert>;

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Catálogo Completo</h2>
            <Row className="g-4">
                {(libros ?? []).map(libro => (
                    <Col xs={12} md={4} key={libro.id}>
                        <LibroCard {...libro} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import type { LibroProps } from '../types/libro';

export function LibroCard({ id, titulo, autor, imagen }: LibroProps) {
    const [likes, setLikes] = useState(0);

    return (
        <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src={imagen} alt={`Portada de ${titulo}`} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">{titulo}</Card.Title>
                <Card.Text className="text-muted">{autor}</Card.Text>
                
                <Button variant="outline-danger" className="mt-auto mb-2" onClick={() => setLikes(likes + 1)}>
                    ♡ Me gusta ({likes})
                </Button>
                
                <Link to={`/libros/${id}`} className="btn btn-outline-primary">
                    Ver detalle
                </Link>
            </Card.Body>
        </Card>
    );
}
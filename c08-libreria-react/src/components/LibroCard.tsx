import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

interface LibroProps {
    titulo: string;
    autor: string;
    imagen: string;
}

export function LibroCard({ titulo, autor, imagen }: LibroProps) {
    const [likes, setLikes] = useState(0);

    const sumarLike = () => {
        setLikes(likes + 1);
    };

    return (
        <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src={imagen} alt={`Portada de ${titulo}`} />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold">{titulo}</Card.Title>
                <Card.Text className="text-muted">{autor}</Card.Text>
                
                <Button 
                    variant="outline-danger" 
                    className="mt-auto mb-2" 
                    onClick={sumarLike}
                >
                    ♡ Me gusta ({likes})
                </Button>
                
                <Button variant="outline-primary" href="#">Ver detalle</Button>
            </Card.Body>
        </Card>
    );
}
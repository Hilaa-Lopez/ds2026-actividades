import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { libroSchema, type LibroValidado } from '../schemas/libroSchema';
import { apiFetch } from '../services/api';

const IMG_PLACEHOLDER = 'https://placehold.co/300x400?text=Libro';

export default function LibroNuevo() {
    const navigate = useNavigate();
    const [errorGlobal, setErrorGlobal] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors } } = useForm<LibroValidado>({
        resolver: zodResolver(libroSchema)
    });

    const onSubmit = async (data: LibroValidado) => {
        try {
            setErrorGlobal(null);
            
            // Le pegamos al backend real con el token
            await apiFetch('/libros', {
                method: 'POST',
                body: JSON.stringify({
                    titulo: data.titulo,
                    precio: data.precio,
                    imagen: IMG_PLACEHOLDER,
                    disponible: data.disponible,
                    autorId: Number(data.autor) // Convertimos a número porque la API pide Int
                })
            });
            
            alert("¡Libro agregado con éxito!");
            navigate('/catalogo');
            
        } catch (error: any) {
            // Acá va a saltar "Falta el token" o "No tenés permiso"
            setErrorGlobal(error.message); 
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="container py-4" style={{ maxWidth: 480 }}>
            <h2>Nuevo libro</h2>
            {errorGlobal && <Alert variant="danger">{errorGlobal}</Alert>}
            
            <Form.Group className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control {...register('titulo')} isInvalid={!!errors.titulo} />
                <Form.Control.Feedback type="invalid">{errors.titulo?.message}</Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Autor ID (Ej: 1, 2 o 3)</Form.Label>
                <Form.Control type="number" {...register('autor')} isInvalid={!!errors.autor} />
                <Form.Control.Feedback type="invalid">{errors.autor?.message}</Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Precio</Form.Label>
                <Form.Control type="number" {...register('precio')} isInvalid={!!errors.precio} />
                <Form.Control.Feedback type="invalid">{errors.precio?.message}</Form.Control.Feedback>
            </Form.Group>
            
            <Form.Check className="mb-3" label="Disponible" {...register('disponible')} />
            
            <Button type="submit" variant="primary">Agregar libro</Button>
        </Form>
    );
}
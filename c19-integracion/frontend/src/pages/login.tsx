import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { loginSchema, type LoginValidado } from '../schemas/loginSchema';
import { apiFetch } from '../services/api';
import { guardarToken } from '../services/sesion';

export default function Login() {
    const navigate = useNavigate();
    const [errorGlobal, setErrorGlobal] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors } } = useForm<LoginValidado>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = async (datos: LoginValidado) => {
        try {
            setErrorGlobal(null);
            const sesion = await apiFetch<any>('/auth/login', { 
                method: 'POST', 
                body: JSON.stringify(datos) 
            });
            guardarToken(sesion.token);
            alert("¡Login exitoso!");
            navigate('/catalogo');
        } catch (error: any) {
            setErrorGlobal(error.message);
        }
    }; 

    return (
        <Form onSubmit={handleSubmit(onSubmit)} className="container py-4" style={{ maxWidth: 480 }}>
            <h2 className="mb-4">Iniciar Sesión</h2>
            {errorGlobal && <Alert variant="danger">{errorGlobal}</Alert>}

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" {...register('email')} isInvalid={!!errors.email} />
                <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" {...register('password')} isInvalid={!!errors.password} />
                <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100">Ingresar</Button>
        </Form>
    );
} 
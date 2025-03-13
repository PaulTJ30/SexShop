import React, { useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export const RegisterUser = () => {
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const onChangeRegister = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div className="register-container">
            <Container>
                <Card className="register-card">
                    <Card.Body>
                        <Card.Title className="text-center">¡Regístrate aquí!</Card.Title>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre:</Form.Label>
                                <Form.Control onChange={onChangeRegister} name="name" placeholder="Ingresa tu nombre" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Apellidos:</Form.Label>
                                <Form.Control onChange={onChangeRegister} name="lastNames" placeholder="Ingresa tu apellido" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Correo:</Form.Label>
                                <Form.Control onChange={onChangeRegister} name="email" type="email" placeholder="Ingresa tu correo" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Contraseña:</Form.Label>
                                <Form.Control onChange={onChangeRegister} name="password" type="password" placeholder="Ingresa tu contraseña" />
                            </Form.Group>
                            
                        </Form>
                        <Button className="register-button">¡Regístrate!</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};
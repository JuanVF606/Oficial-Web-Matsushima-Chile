// NationalDirectors.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import director1 from '../../assets/img/Hero.jpg';
import director2 from '../../assets/img/Hero.jpg';
import director3 from '../../assets/img/Hero.jpg';
import director4 from '../../assets/img/Hero.jpg';

const directors = [
    {
        id: 1,
        name: 'Juan Pérez',
        title: 'Director Nacional',
        description: 'Experto en artes marciales con más de 20 años de experiencia en karate.',
        img: director1,
    },
    {
        id: 2,
        name: 'Ana González',
        title: 'Directora Zona Norte',
        description: 'Especialista en técnicas avanzadas de karate y entrenadora de alto nivel.',
        img: director2,
    },
    {
        id: 3,
        name: 'Pedro Martínez',
        title: 'Director Zona Centro',
        description: 'Instructor con vasta experiencia en torneos nacionales e internacionales.',
        img: director3,
    },
    {
        id: 4,
        name: 'Laura Fernández',
        title: 'Directora Zona Sur',
        description: 'Referente en la enseñanza de karate para todas las edades y niveles.',
        img: director4,
    },
];

const NationalDirectors = () => {
    return (
        <section className="py-5 text-center position-relative overflow-hidden NationalDirectors">
            <Container fluid className="px-5">
                <Row className="align-items-center">
                    <Col md={12} lg={12} className="text-md-start mb-4">
                        <h2 className="display-5 mb-4 text-primary fw-bold">Conoce a Nuestros Directores</h2>
                    </Col>
                    <Col md={12}>
                        <Row className="g-4 justify-content-center">
                            {directors.map(director => (
                                <Col xs={12} sm={6} md={4} lg={3} key={director.id}>
                                    <Card className="border-0 shadow-lg rounded-4 overflow-hidden director-card">
                                        <Card.Img 
                                            variant="top" 
                                            src={director.img} 
                                            alt={director.name} 
                                            className="img-fluid rounded-circle border border-4 border-primary mx-auto mt-3 director-img"
                                        />
                                        <Card.Body className="p-4">
                                            <Card.Title className="fw-bold mb-2 text-primary">{director.name}</Card.Title>
                                            <Card.Subtitle className="text-muted mb-2">{director.title}</Card.Subtitle>
                                            <Card.Text className="text-muted">{director.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default NationalDirectors;
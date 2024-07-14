import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const achievements = [
  {
    id: 1,
    title: 'Campeón Nacional 2023',
    date: 'Diciembre 2023',
    description: 'Ganamos el primer lugar en el Campeonato Nacional de Karate.',
    image: 'logro1.jpg',
  },
  {
    id: 2,
    title: 'Mejor Dojo del Año',
    date: 'Noviembre 2023',
    description: 'Reconocidos como el mejor dojo del año por la Federación Nacional de Karate.',
    image: 'logro2.jpg',
  },
  {
    id: 3,
    title: 'Medallas en Torneos Internacionales',
    date: 'Septiembre 2023',
    description: 'Obtuvimos medallas en diversos torneos internacionales.',
    image: 'logro3.jpg',
  },
  {
    id: 4,
    title: 'Certificación Internacional de Instructores',
    date: 'Junio 2023',
    description: 'Todos nuestros instructores recibieron certificaciones internacionales.',
    image: 'logro4.jpg',
  },
];

const Achievements = () => {
  return (
    <section className="py-5" id="achievements">
      <Container>
        <h2 className="text-center mb-5">Logros y Reconocimientos</h2>
        <Row className="g-4">
          {achievements.map(achievement => (
            <Col md={6} lg={3} key={achievement.id}>
              <Card className="h-100 shadow-sm border-0 achievement-card">
                <Card.Img variant="top" src={achievement.image} alt={achievement.title} className="achievement-img" />
                <Card.Body>
                  <Card.Title className="text-primary">{achievement.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{achievement.date}</Card.Subtitle>
                  <Card.Text>{achievement.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <a href="/#" className="btn btn-primary">Ver más</a>
        </div>
      </Container>
    </section>
  );
};

export default Achievements;

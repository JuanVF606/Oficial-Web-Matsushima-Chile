// UpcomingEvents.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const events = [
  {
    id: 1,
    title: 'Torneo Nacional de Karate',
    date: '25 de agosto, 2024',
    location: 'Santiago, Chile',
    description: 'Participa en el torneo nacional donde se reúnen los mejores karatekas del país.',
  },
  {
    id: 2,
    title: 'Seminario de Técnicas Avanzadas',
    date: '10 de septiembre, 2024',
    location: 'Valparaíso, Chile',
    description: 'Aprende técnicas avanzadas con los mejores instructores del país.',
  },
  {
    id: 3,
    title: 'Campeonato Regional',
    date: '5 de octubre, 2024',
    location: 'Concepción, Chile',
    description: 'Compite y demuestra tu habilidad en el campeonato regional.',
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-5 bg-light mt-5" id="upcoming-events">
      <Container>
        <h2 className="text-center mb-5">Próximos Eventos</h2>
        <Row className="g-4">
          {events.map(event => (
            <Col md={4} key={event.id}>
              <Card className="h-100 shadow-sm border-0 event-card">
                <Card.Body>
                  <Card.Title className="text-primary">{event.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{event.date} - {event.location}</Card.Subtitle>
                  <Card.Text>{event.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Button variant="outline-primary" size="lg" href="#">Ver más eventos</Button>
        </div>
      </Container>
    </section>
  );
};

export default UpcomingEvents;

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Pérez',
    text: 'Las clases en IKO Matsushima han cambiado mi vida. El ambiente es increíble y los instructores son muy profesionales.',
    img: 'https://via.placeholder.com/100'
  },
  {
    id: 2,
    name: 'María López',
    text: 'He encontrado una comunidad maravillosa en IKO Matsushima. ¡Recomiendo las clases a todos los interesados en el karate!',
    img: 'https://via.placeholder.com/100'
  },
  {
    id: 3,
    name: 'José González',
    text: 'La calidad de la enseñanza en IKO Matsushima es excepcional. Los entrenamientos son desafiantes y motivadores.',
    img: 'https://via.placeholder.com/100'
  },
  {
    id: 4,
    name: 'Ana Rodríguez',
    text: '¡Una experiencia fantástica! El karate me ha ayudado a crecer tanto física como mentalmente.',
    img: 'https://via.placeholder.com/100'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials text-center">
      <Container>
        <h2 className="display-4 mb-4">Lo Que Dicen Nuestros Miembros</h2>
        <Row className="g-4">
          {testimonials.map((testimonial) => (
            <Col md={6} lg={3} key={testimonial.id}>
              <Card className="testimonial-card">
                <Card.Img variant="top" src={testimonial.img} alt={testimonial.name} className="rounded-circle mx-auto" />
                <Card.Body>
                  <Card.Text>{testimonial.text}</Card.Text>
                  <Card.Footer className="text-muted">{testimonial.name}</Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <a href="/testimonials" className="btn btn-primary">
            Ver Más Testimonios
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;

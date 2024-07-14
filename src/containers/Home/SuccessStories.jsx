import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const successStories = [
  {
    id: 1,
    title: "Campeón Nacional 2023",
    description:
      "Nuestro alumno, Luis Ramírez, ganó el primer lugar en el Campeonato Nacional de Karate.",
    img: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Certificación Internacional",
    description:
      "Nuestro instructor, Juan Pérez, recibió una certificación internacional de maestro de karate.",
    img: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Eventos de Exposición",
    description:
      "Participamos en varios eventos de exposición para promover el karate en la comunidad.",
    img: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    title: "Premio a la Excelencia",
    description:
      "IKO Matsushima recibió el Premio a la Excelencia en la Educación de Artes Marciales.",
    img: "https://via.placeholder.com/300",
  },
];

const SuccessStories = () => {
  return (
    <section className="success-stories text-center">
      <Container>
        <h2 className="display-4 mb-4">Historias de Éxito</h2>
        <Row className="g-4">
          {successStories.map((story) => (
            <Col md={6} lg={3} key={story.id}>
              <Card>
                <Card.Img variant="top" src={story.img} alt={story.title} />
                <Card.Body>
                  <Card.Title>{story.title}</Card.Title>
                  <Card.Text>{story.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <a href="/success-stories" className="btn btn-primary">
            Leer Más Historias
          </a>
        </div>
      </Container>
    </section>
  );
};

export default SuccessStories;

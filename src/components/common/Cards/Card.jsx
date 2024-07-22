import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Cards = ({img, description, people}) => {
  return (
    <Container fluid className="px-5">
        <Row className="align-items-center">
          <Col md={12} lg={12} className="text-md-start mb-4">
            <h2 className="display-5 mb-4 text-primary fw-bold">
              Conoce a Nuestros Directores
            </h2>
          </Col>
          <Col md={12}>
            <Row className="g-4 justify-content-center">
              {people.map((director) => (
                <Col xs={12} sm={6} md={4} lg={3} key={director.id}>
                  <Card className="border-0 shadow-lg rounded-4 overflow-hidden director-card">
                    <Card.Img
                      variant="top"
                      src={director.img}
                      alt={director.name}
                      className="img-fluid rounded-circle border border-4 border-primary mx-auto mt-3 director-img"
                    />
                    <Card.Body className="p-4">
                      <Card.Title className="fw-bold mb-2 text-primary">
                        {director.name}
                      </Card.Title>
                      <Card.Subtitle className="text-muted mb-2">
                        {director.title}
                      </Card.Subtitle>
                      <Card.Text className="text-muted">
                        {director.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
  );
};

export default Cards;

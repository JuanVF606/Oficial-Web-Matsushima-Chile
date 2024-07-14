import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const blogPosts = [
  {
    id: 1,
    title: 'Beneficios del Karate',
    summary: 'Descubre los muchos beneficios físicos y mentales de practicar karate.',
    img: 'https://via.placeholder.com/300',
    link: '/blog/beneficios-del-karate'
  },
  {
    id: 2,
    title: 'Cómo Elegir tu Primer Gi',
    summary: 'Consejos para elegir el mejor gi para comenzar tu práctica de karate.',
    img: 'https://via.placeholder.com/300',
    link: '/blog/como-elegir-tu-primer-gi'
  },
  {
    id: 3,
    title: 'Eventos de Karate en Chile',
    summary: 'Un resumen de los próximos eventos de karate en todo Chile.',
    img: 'https://via.placeholder.com/300',
    link: '/blog/eventos-de-karate-en-chile'
  },
  {
    id: 4,
    title: 'Entrevista con un Maestro',
    summary: 'Una entrevista exclusiva con uno de nuestros maestros de karate más experimentados.',
    img: 'https://via.placeholder.com/300',
    link: '/blog/entrevista-con-un-maestro'
  }
];

const Blog = () => {
  return (
    <section className="blog text-center">
      <Container>
        <h2 className="display-4 mb-4">Últimos Artículos del Blog</h2>
        <Row className="g-4">
          {blogPosts.map((post) => (
            <Col md={6} lg={3} key={post.id}>
              <Card>
                <Card.Img variant="top" src={post.img} alt={post.title} />
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.summary}</Card.Text>
                  <a href={post.link} className="btn btn-primary">Leer Más</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div className="text-center mt-4">
        <a href="/blog" className="btn btn-primary">
          Ver Todas nuestras Publicaciones
        </a>
      </div>
    </section>
  );
};

export default Blog;

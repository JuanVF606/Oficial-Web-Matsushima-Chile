import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const galleryItems = [
  { id: 1, type: 'image', src: 'image1.jpg', alt: 'Imagen de Evento 1' },
  { id: 2, type: 'image', src: 'image2.jpg', alt: 'Imagen de Evento 2' },
  { id: 3, type: 'video', src: 'video1.mp4', alt: 'Video de Entrenamiento 1' },
  { id: 4, type: 'image', src: 'image3.jpg', alt: 'Imagen de Dojo' },
  { id: 5, type: 'video', src: 'video2.mp4', alt: 'Video de Torneo 2023' },
  { id: 6, type: 'image', src: 'image4.jpg', alt: 'Imagen de Clase' },
];

const Gallery = () => {
  return (
    <section className="py-5" id="gallery">
      <Container>
        <h2 className="text-center mb-5">Galería de Imágenes y Videos</h2>
        <Row className="g-4">
          {galleryItems.map(item => (
            <Col md={4} key={item.id}>
              <Card className="border-0 shadow-sm rounded overflow-hidden gallery-item">
                {item.type === 'image' ? (
                  <Card.Img variant="top" src={item.src} alt={item.alt} className="gallery-img" />
                ) : (
                  <video className="gallery-video" controls>
                    <source src={item.src} type="video/mp4" />
                    Tu navegador no soporta el formato de video.
                  </video>
                )}
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <a href="/gallery" className="btn btn-primary">
            Descubre más
          </a>
          </div>
      </Container>
    </section>
  );
};

export default Gallery;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTiktok , FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactAndSocial = () => {
  return (
    <section className="py-5 bg-light" id="contact-social">
      <Container>
        <Row className="justify-content-center">
          {/* Sección de Redes Sociales */}
          <Col md={12} lg={6} className="text-center">
            <h2 className="mb-4 text-primary">Síguenos en nuestras redes Sociales</h2>
            <div className="d-flex justify-content-center gap-4">
              <Link to="https://www.facebook.com/people/Honbu-Dojo/pfbid02gRJVoMaJZyh4JvDRf84M82FnxJDkQfkMdwY6HZ6RahUKgZAKVNTEdPjbVUVtLQCPl/?mibextid=ZbWKwL" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label='Redes Oficiales de IKO MATSUSHIMA CHILE'>
                <FaFacebookF size={40} />
              </Link>
              <Link to="https://www.instagram.com/matsushimachile" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label='Redes Oficiales de IKO MATSUSHIMA CHILE'>
                <FaInstagram size={40} />
              </Link>
              <Link to="https://www.youtube.com/@matsushimachile" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label='Redes Oficiales de IKO MATSUSHIMA CHILE'>
                <FaYoutube size={40} />
              </Link>
              <Link to="https://www.tiktok.com/@matsushimachile" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label='Redes Oficiales de IKO MATSUSHIMA CHILE'>
                <FaTiktok size={40} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactAndSocial;

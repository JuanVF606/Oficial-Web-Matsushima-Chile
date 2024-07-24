import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


const ContactAndSocial = () => {
  // Manejar el envío del formulario para abrir el cliente de correo
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.formName.value;
    const email = event.target.elements.formEmail.value;
    const message = event.target.elements.formMessage.value;

    if (name && email && message) {
      // Crear el enlace mailto con los campos del formulario
      const mailtoLink = `mailto:info@ikomatsushima.cl?subject=Solicito más informacion&body=Nombre: ${name}%0D%0ACorreo Electrónico: ${email}%0D%0AMensaje: ${message}`;
      window.location.href = mailtoLink;
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <section className="py-5 bg-light" id="contact-social">
      <Container>
        <Row className="align-items-center">
          {/* Sección de Contacto */}
          <Col md={12} lg={6} className="mb-4 mb-md-0">
            <h2 className="text-center mb-4 text-primary">Contacto</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="formName" placeholder="Tu nombre" required />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" name="formEmail" placeholder="Tu correo electrónico" required />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mt-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" name="formMessage" rows={3} placeholder="Tu mensaje" required />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3 w-100">
                Enviar
              </Button>
            </Form>
          </Col>

          {/* Sección de Redes Sociales */}
          <Col md={12} lg={6}>
            <h2 className="text-center mb-4 text-primary">Síguenos en  nuestras redes Sociales</h2>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-4">
              <a href="https://facebook.com/IKO_Matsushima" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/IKO_Matsushima" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://twitter.com/IKO_Matsushima" className="social-icon" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactAndSocial;

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { get_gallery_list } from '../redux/actions/gallery/gallery';
import { Container, Row, Col, Card, Button, Modal, Carousel, Alert } from 'react-bootstrap';

const Gallery = ({ galleryData, get_gallery_list }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    get_gallery_list();
  }, [get_gallery_list]);

  const handleShowModal = (item) => {
    setModalContent(item);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Revive nuestros Momentos</h2>
      {galleryData.loading ? (
        <p>Loading...</p>
      ) : galleryData.error ? (
        <Alert variant="danger" className="text-center">
          {galleryData.error}
        </Alert>
      ) : (
        <Row>
          {galleryData?.galleries.map((item) => (
            <Col xs={12} sm={6} md={4} lg={3} key={item.id} className="mb-4">
              <Card className="gallery-card">
                {item.additional_items.length > 0 && item.additional_items[0].is_video ? (
                  <video className="card-img-top" controls>
                    <source src={item.additional_items[0].url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={item.thumbnail}
                    className="card-img-top"
                    alt={item.title}
                    onClick={() => handleShowModal(item)}
                    style={{ cursor: 'pointer' }}
                  />
                )}
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => handleShowModal(item)}
                  >
                    Ver {item?.additional_items.length > 0 && item.additional_items[0].is_video ? 'Video' : 'Más'}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {modalContent && (
        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{modalContent.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modalContent.additional_items.length > 0 && modalContent.additional_items[0].is_video ? (
              <video className="w-100" controls>
                <source src={modalContent.additional_items[0].url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Carousel>
                {modalContent.additional_items.map((item, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={item.url}
                      alt={`Imagen ${index + 1}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  galleryData: state.gallery,
});

const mapDispatchToProps = (dispatch) => ({
  get_gallery_list: () => dispatch(get_gallery_list()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

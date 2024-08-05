import React, { useEffect, useState } from "react";
import { fetchGalleries, fetchGalleryMediaItems } from "../../services/api";
import {
  Container,
  Row,
  Col,
  Card,
  Modal,
  Carousel,
  Button,
} from "react-bootstrap";

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [mediaItems, setMediaItems] = useState([]);
  const [selectedMediaItem, setSelectedMediaItem] = useState(null);

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const data = await fetchGalleries();
        setGalleries(data);
      } catch (error) {
        setError("Error fetching galleries.");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const handleShowModal = async (gallery) => {
    try {
      setModalContent(gallery);
      setSelectedMediaItem(null);

      // Fetch media items for the gallery
      const items = await fetchGalleryMediaItems(gallery.id);
      setMediaItems(items);
    } catch (error) {
      setError("Error fetching gallery media items.");
    }

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent(null);
    setMediaItems([]);
  };

  const handleMediaClick = (mediaItem) => {
    setSelectedMediaItem(mediaItem);
  };

  const handleFullscreenToggle = () => {
    if (!selectedMediaItem) return;
    const videoElement = document.getElementById(
      `video-${selectedMediaItem.id}`
    );
    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        /* Firefox */
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) {
        /* IE/Edge */
        videoElement.msRequestFullscreen();
      }
    }
  };

  const truncateDescription = (description) => {
    if (!description) return "";
    return description.length > 30
      ? description.slice(0, 30) + "..."
      : description;
  };

  return (
    <Container className="py-5">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-danger">{error}</p>
      ) : (
        <Row>
          {galleries.map((gallery) => (
            <Col xs={12} sm={6} md={4} lg={3} key={gallery.id} className="mb-4">
              <Card
                className="gallery-card"
                onClick={() => handleShowModal(gallery)}
                style={{ cursor: "pointer" }}
              >
                <Card.Img
                  src={gallery.thumbnail || "https://via.placeholder.com/300"}
                  className="card-img-top gallery-media"
                  alt={gallery.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300x200";
                  }}
                />
                <Card.Body>
                  <Card.Title className="gallery-card-title">
                    {gallery.name}
                  </Card.Title>
                  <Card.Text className="gallery-card-description">
                    {truncateDescription(gallery.description)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {modalContent && (
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          size="lg"
          centered
          dialogClassName="modal-90w"
        >
          <Modal.Header closeButton>
            <Modal.Title className="modal-title">
              {modalContent.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="modal-description-text">{modalContent.description}</p>
            {mediaItems.length > 0 ? (
              <Carousel indicators={false} controls={true}>
                {mediaItems.map((item, index) => (
                  <Carousel.Item
                    key={index}
                    onClick={() => handleMediaClick(item)}
                  >
                    {item.media_type === "video" ? (
                      <div className="video-wrapper">
                        <video
                          id={`video-${item.id}`}
                          className="d-block w-100 modal-media"
                          controls
                        >
                          <source src={item.file} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <Button
                          className="fullscreen-btn"
                          onClick={handleFullscreenToggle}
                        >
                          Pantalla Completa
                        </Button>
                      </div>
                    ) : (
                      <img
                        className="d-block w-100 modal-media"
                        src={item.file}
                        alt={`Imagen ${index + 1}`}
                      />
                    )}
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <p className="text-center">No media items available.</p>
            )}
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

export default Gallery;

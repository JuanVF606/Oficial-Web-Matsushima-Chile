import React, { useState } from "react";
import moment from "moment";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/solid";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
moment.locale("es");


export default function Cards({ posts }) {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (index) => {
    if (index === expandedImage) {
      setExpandedImage(null);
    } else {
      setExpandedImage(index);
    }
  };

  const handleClose = () => {
    setExpandedImage(null);
  };

  return (
    <>
      {posts && posts.length > 0 ? (
        <div className="container mt-5">
          <div className="row justify-content-center align-items-center">
            {posts.map((post, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card card-custom rounded bg-white border-0 shadow-sm">
                  <div
                    className="card-image-container"
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      src={post.thumbnail}
                      className="card-img-top img-fluid"
                      alt={post.title}
                    />
                    {expandedImage === index && (
                      <div className="card-icon-overlay" onClick={handleClose}>
                        <ArrowsPointingOutIcon
                          width="24"
                          height="24"
                          className="text-white"
                        />
                      </div>
                    )}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">{post.title}</h5>
                    <hr />
                    <p className="card-text text-secondary">
                      {post.description.length > 80
                        ? post.description.slice(0, 90) + "..."
                        : post.description}
                    </p>
                    <Link
                      onClick={() => handleImageClick(index)}
                      className="btn btn-primary btn-sm btn-block text-white"
                    >
                      Leer más
                    </Link>
                  </div>
                  <div className="card-footer text-center">
                    <small className="text-muted">{post.category.name}</small>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="alert alert-warning text-center" role="alert">
          No hay actividades para mostrar
        </div>
      )}

      {expandedImage !== null && (
        <Modal
          show={expandedImage !== null}
          onHide={handleClose}
          centered
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{posts[expandedImage].title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={posts[expandedImage].thumbnail}
              className="img-fluid"
              alt={posts[expandedImage].title}
            />
            <p className="mt-3 text-center">
              {posts[expandedImage].description}
            </p>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

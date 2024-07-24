import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Card } from "react-bootstrap";
import { get_dojos } from "../../redux/actions/dojos/dojos";
import logo from "../../assets/img/logo.jpg";
const NationalDirectors = ({ get_dojos, dojos, title }) => {
  const [error, setError] = useState(null);

  // Asegúrate de que dojos esté definido antes de usarlo
  const sortedDirectors = (dojos || []) // Filtra y ordena dojos por zona
    .filter(
      (dojo) => (dojo.is_Director === "Si") & (dojo.status === "published")
    )
    .sort((a, b) => {
      const zonaOrder = { Nacional: 1, Norte: 2, Centro: 3, Sur: 4 };
      return zonaOrder[a.zona] - zonaOrder[b.zona];
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        await get_dojos();
      } catch (error) {
        setError("La organización no cuenta con directores asignados");
      }
    };
    fetchData();
  }, [get_dojos]);

  return (
    <section className="py-5 text-center position-relative overflow-hidden NationalDirectors">
      <Container fluid className="px-5">
        <Row className="align-items-center">
          <Col md={12} lg={12} className="text-md-start mb-4">
            <h2 className="display-5 mb-4 text-primary fw-bold">
             {title}
            </h2>
          </Col>
          <Col md={12}>
            <Row className="g-4 justify-content-center">
              {sortedDirectors.length > 0 ? (
                sortedDirectors.map((director) => (
                  <Col xs={12} sm={6} md={4} lg={3} key={director.id}>
                    <Card className="border-0 shadow-lg rounded-4 overflow-hidden director-card">
                      <Card.Img
                        variant="top"
                        src={director.profile_image}
                        alt={`${director.cargo} ${director.full_name}`}
                        className="img-fluid rounded-circle border border-4 border-primary mx-auto mt-3 director-img"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = logo;
                        }}
                      />
                      <Card.Body className="p-4">
                        <Card.Title className="fw-bold mb-2 text-primary">
                          {director.cargo} {director.full_name}
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                          {director.zona === "Nacional"
                            ? "Director Nacional"
                            : `Director Zona ${director.zona}`}
                        </Card.Subtitle>
                        <Card.Text className="text-muted"></Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <Col>
                  <div className="alert alert-warning text-center" role="alert">
                    {error || "No hay directores disponibles en este momento"}
                  </div>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => ({
  dojos: state.dojos?.dojo_list, // Asegúrate de que dojos no sea null o undefined
});

export default connect(mapStateToProps, {
  get_dojos,
})(NationalDirectors);

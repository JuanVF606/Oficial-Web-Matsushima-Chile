// UpcomingEvents.js
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  get_actividades_list,
  get_actividades_list_page,
  get_actividades_list_category_page,
} from "./../../redux/actions/actividades/actividades";
import { get_categories } from "./../../redux/actions/categories/categories";
import moment from "moment";
import { connect } from "react-redux";
moment.locale("es");
const events = [
  {
    id: 1,
    title: "Torneo Nacional de Karate",
    date: "25 de agosto, 2024",
    location: "Santiago, Chile",
    description:
      "Participa en el torneo nacional donde se reúnen los mejores karatekas del país.",
  },
  {
    id: 2,
    title: "Seminario de Técnicas Avanzadas",
    date: "10 de septiembre, 2024",
    location: "Valparaíso, Chile",
    description:
      "Aprende técnicas avanzadas con los mejores instructores del país.",
  },
  {
    id: 3,
    title: "Campeonato Regional",
    date: "5 de octubre, 2024",
    location: "Concepción, Chile",
    description: "Compite y demuestra tu habilidad en el campeonato regional.",
  },
];

const UpcomingEvents = (
  get_categories,
  get_actividades_list_page,
  get_actividades_list,
  actividades,
  categories,
  posts,
  count,
  next,
  previous
) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await get_categories();
        await get_actividades_list();

      } catch (error) {
        setError("No se pudo cargar los eventos");
      }
    };
    fetchData();
  }, [get_categories, get_actividades_list]);


  return (
    <section className="py-5 bg-light mt-5" id="upcoming-events">
      <Container>
        <h2 className="text-center mb-5">Próximos Eventos</h2>
        {posts?.length > 0 ? (
          <>
            <h1>hola</h1>
          </>
        ) : (
          <h1>{error}</h1>
        )}
        <Row className="g-4">
          {posts?.map((event) => (
            <Col md={4} key={event.id}>
              <Card className="h-100 shadow-sm border-0 event-card">
                <Card.Body>
                  <Card.Title className="text-primary">
                    {event.title}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {event.date} - {event.location}
                  </Card.Subtitle>
                  <Card.Text>{event.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}

          {events.map((event) => (
            <Col md={4} key={event.id}>
              <Card className="h-100 shadow-sm border-0 event-card">
                <Card.Body>
                  <Card.Title className="text-primary">
                    {event.title}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {event.date} - {event.location}
                  </Card.Subtitle>
                  <Card.Text>{event.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Button  size="lg" href="/events">
            <Link to="/actividades" className=" text-decoration-none text-white  fs-5 align-middle hover-text-white
            ">Ver todos los eventos</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  posts: state.actividades.activity_list,
  count: state.actividades.count,
  next: state.actividades.next,
  previous: state.actividades.previous,
});

export default connect(mapStateToProps, {
  get_categories,
  get_actividades_list,
  get_actividades_list_page,
  get_actividades_list_category_page,
})(UpcomingEvents);

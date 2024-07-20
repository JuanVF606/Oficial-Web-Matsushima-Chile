import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  get_blog_list,
  get_blog_list_page,
} from "./../../redux/actions/blog/blog";
import { get_categories } from "./../../redux/actions/categories/categories";
import { CalendarIcon } from "@heroicons/react/24/solid";
import moment from "moment";
moment.locale("es");

const LatestNews = ({
  get_categories,
  get_blog_list,
  get_blog_list_page,
  posts,
  count,
  next,
  previous,
}) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await get_categories();
        await get_blog_list(2); // Cargar las últimas noticias
      } catch (error) {
        setError("No se pudo cargar las últimas noticias");
      }
    };
    fetchData();
  }, [get_blog_list, get_categories]);

  // Asegúrate de que `posts` sea un array antes de usar el método `.map`
  const newsItems = (posts || []).map((news, index) => (
    <div className="col-md-4" key={news.id || index}>
      <div className="card mb-4 shadow-sm">
        <img
          src={news.image || "https://via.placeholder.com/300"}
          className="card-img-top"
          alt={news.title}
        />
        <p className="card-text">
          <small className="text-muted">
            <CalendarIcon
              style={{ height: "20px", width: "20px" }}
              className="text-gray-400"
              aria-hidden="true"
            />
            {moment(news.date).format("MMM Do YY")}
          </small>
        </p>
        <div className="card-body">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}</p>
          <p className="card-text">
            <small className="text-muted">
              <i className="far fa-calendar-alt"></i> {news.date}
            </small>
          </p>
          <a href={news.link} className="btn btn-primary">
            Leer más <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="latest-news container mt-5">
      <h2 className="mb-4">Últimas Noticias</h2>
      <div className="row">
        {error ? (
          <div className="alert alert-danger text-center" role="alert">
            {error}
          </div>
        ) : newsItems.length > 0 ? (
          newsItems
        ) : (
          <div className="alert alert-info text-center">
            No hay noticias disponibles
          </div>
        )}
      </div>
      {/* Botón para ver más noticias */}
      <div className="text-center mt-4">
        <a href="/noticias" className="btn btn-outline-primary btn-lg">
          Ver más noticias
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  posts: state.blog.blog_list,
  count: state.blog.count,
  next: state.blog.next,
  previous: state.blog.previous,
});

export default connect(mapStateToProps, {
  get_categories,
  get_blog_list,
  get_blog_list_page,
})(LatestNews);

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_blog_list} from "../../redux/actions/blog/blog";
import { get_categories } from "../../redux/actions/categories/categories";
import moment from "moment";
import logo from "../../assets/img/logo.jpg";
moment.locale("es-es");

const LatestNews = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  // Access state using useSelector
  const posts = useSelector((state) => state.blog.blog_list);
  const count = useSelector((state) => state.blog.count);
  const next = useSelector((state) => state.blog.next);
  const previous = useSelector((state) => state.blog.previous);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(get_categories());
        await dispatch(get_blog_list(3)); // Cargar las últimas noticias
      } catch (error) {
        setError("No se pudo cargar las últimas noticias");
      }
    };
    fetchData();
  }, [dispatch]);

  // Asegúrate de que `posts` sea un array antes de usar el método `.map`
  const newsItems = (posts || []).map((news, index) => (
    <div className="col-md-4" key={news.id || index}>
      <div className="card mb-4 shadow-sm">
        <img
          src={news.thumbnail || logo}
          className="card-img-top"
          alt={news.title}
        />
        
        <div className="card-body">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description.length > 100 ? `${news.description.slice(0, 90)}...` : news.description}</p>
          <a href={`/noticias/${news.slug}`} className="btn btn-primary">
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

export default LatestNews;

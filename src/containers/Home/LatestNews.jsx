// LatestNews.js
import React from 'react';

const newsData = [
    {
        title: "Campeonato Nacional de Karate",
        description: "El Campeonato Nacional de Karate se llevará a cabo el próximo mes con la participación de diversos dojos.",
        date: "2024-07-12",
        link: "#",
        image: "https://via.placeholder.com/300"
    },
    {
        title: "Entrenamiento Especial",
        description: "Este fin de semana se realizará un entrenamiento especial con el Sensei Matsumoto.",
        date: "2024-07-11",
        link: "#",
        image: "https://via.placeholder.com/300"
    },
    {
        title: "Nuevo Dojo en Santiago",
        description: "Nos complace anunciar la apertura de un nuevo dojo en Santiago, donde se impartirán clases a partir de agosto.",
        date: "2024-07-10",
        link: "#",
        image: "https://via.placeholder.com/300"
    }
];

const LatestNews = () => {
    return (
        <div className="latest-news container mt-5">
            <h2 className="mb-4">Últimas Noticias</h2>
            <div className="row">
                {newsData.map((news, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="card mb-4 shadow-sm">
                            <img src={news.image} className="card-img-top" alt={news.title} />
                            <div className="card-body">
                                <h5 className="card-title">{news.title}</h5>
                                <p className="card-text">{news.description}</p>
                                <p className="card-text">
                                    <small className="text-muted"><i className="far fa-calendar-alt"></i> {news.date}</small>
                                </p>
                                <a href={news.link} className="btn btn-primary">Leer más <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Botón para ver más noticias */}
            <div className="text-center mt-4">
                <a href="/#" className="btn btn-outline-primary btn-lg">Ver más noticias</a>
            </div>
        </div>
    );
};

export default LatestNews;

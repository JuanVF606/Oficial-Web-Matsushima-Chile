import React from "react";
import Sosai from "../../assets/img/SosaiOyama.webp";
import Kancho from "../../assets/img/kanchoMatsushima.webp";
import { Button } from "react-bootstrap";

const LeaderProfile = ({ image, name, lifespan, description, link }) => (
  <div className="col-lg-6 col-md-12 mb-4">
    <div className="profile-card shadow rounded">
      <div className="profile-image-container">
        <img
          src={image}
          alt={name}
          className="img-fluid rounded-circle profile-image"
        />
      </div>
      <div className="profile-info">
        <h4 className="card-title-leader">
          {name}
          <br />
          {lifespan}
        </h4>
        <p>{description}</p>
        <Button href={link} target="_blank" className="btn-primary">
          Más información
        </Button>
      </div>
    </div>
  </div>
);

const Leaders = () => {
  return (
    <section className="about-section">
      <h2 className="section-heading text-center">Nuestros Líderes</h2>
      <div className="container">
        <div className="row">
          <LeaderProfile
            image={Sosai}
            name="Sosai Masutatsu Oyama"
            lifespan="(1923-1994)"
            description="Sosai Masutatsu Oyama, conocido como Mas Oyama, fue un karateka surcoreano-japonés y el fundador del Kyokushin Karate. Su enfoque riguroso en el entrenamiento y su legado influyen en el karate moderno. Nacido en Corea y formado en Japón, Oyama es célebre por su fuerza excepcional y su innovador enfoque del combate. Fundó el Kyokushin Karate en Tokio en 1953, extendiéndose globalmente."
            link="https://www.masutatsuoyama.com/"
          />
          <LeaderProfile
            image={Kancho}
            name="Kancho Yoshikazu Matsushima"
            lifespan="(1947-)"
            description="Kancho Yoshikazu Matsushima es un destacado maestro de karate y líder en el estilo Kyokushin Karate. Su dedicación ha sido clave para la expansión global del Kyokushin. Tras la muerte de Mas Oyama, Matsushima asumió el liderazgo para preservar y promover el Kyokushin. Su liderazgo ha fortalecido la comunidad y mantenido la excelencia técnica. Se convierte en el presidente de IKO Matsushima, expandiendo su legado en todo el mundo."
            link="http://kyokushin-matsushima.jp/e/"
          />
        </div>
      </div>
    </section>
  );
};

export default Leaders;

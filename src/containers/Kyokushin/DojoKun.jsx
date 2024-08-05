import React from "react";
import dojoKunTranslations from "../../components/translations/DojoKun";
import "./DojoInfo.css";

const DojoKun = () => {
  const { japonese, spanish } = dojoKunTranslations;

  return (
    <div className="dojo-kun-section">
      <h2 className="header">Dojo Kun</h2>
      <img
        src="https://www.matsushimazonanorte.cl/img/blog/kyokushin_japanese_dojo_kun-1024x576.jpg"
        alt="Dojo Kun"
        className="dojo-kun-image"
      />
      <div className="dojo-kun-text">
        <div className="col-md-12">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h4 className="text-center">En Japonés</h4>
          </div>
          <section className="text-center">
            {japonese.map((item, index) => (
              <p key={index}>
                <span className="dojo-kun-text">
                  {item.text}
                  <br />
                  <span className="text-black">{item.transliteration}</span>
                </span>
              </p>
            ))}
          </section>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h4 className="text-center">En Español</h4>
          </div>
          <section className="text-center text-black">
            {spanish.map((text, index) => (
              <p key={index}>
                <span className="dojo-kun-text">{text}</span>
              </p>
            ))}
          </section>

          {/* Video Section */}
          <div
            className="video-section"
            style={{ marginTop: "20px", textAlign: "center", padding: "10px" }}
          >
            <h4 className="text-center">Video de Dojo Kun</h4>
            <iframe
              width="560"
              style={{ border: "2px solid red", maxWidth: "100%", height: "auto" }}
              height="315"
              src="https://www.youtube.com/embed/z7CPSCa8FiY"
              title="Kyokushin Karate Dojo Kun"
              frameBorder="2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
              referrerPolicy="strict-origin-when-cross-origin"
              caption="Kyokushin Karate Dojo Kun"
              allowFullScreen
              lang="es"
              
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DojoKun;

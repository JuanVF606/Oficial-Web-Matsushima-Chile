import React from 'react';
import dojoKunTranslations from '../../components/translations/DojoKun';
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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
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
  
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <h4 className="text-center">En Español</h4>
            </div>
            <section className="text-center text-black">
              {spanish.map((text, index) => (
                <p key={index}>
                  <span className="dojo-kun-text">{text}</span>
                </p>
              ))}
            </section>
          </div>
        </div>
      </div>
    );
  };
  
  export default DojoKun;
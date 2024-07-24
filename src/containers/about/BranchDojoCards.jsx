import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/img/logo.jpg";

const Cards = ({ dojos }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!dojos) return;

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [dojos]);

  if (!dojos) return null;

  // Orden personalizado para las zonas
  const zoneOrder = ["Nacional", "Norte", "Centro", "Sur"];

  // Filtrar y ordenar los dojos
  const filteredDojos = dojos
    .filter((dojo) => dojo.is_branch_chief === "Si" || dojo.is_dojoOperator === "Si")
    .sort((a, b) => zoneOrder.indexOf(a.zona) - zoneOrder.indexOf(b.zona));

  return (
    <section className="BDMatsushima">
      <h3 className="section-heading text-center">BranchChiefs y Dojo Operadores</h3>
      <p className="text-center">
        Escogidos por Kancho Matsushima para liderar y expandir el Kyokushin en nuestro país.
      </p>
      <div className="container">
        <div className="row">
          {filteredDojos.map((dojo) => (
            <div key={dojo.id} className="col-md-4 mt-4">
              <div className="card profile-card-5">
                <div className="card-img-block">
                  {loading ? (
                    <div
                      className="skeleton-loading w-100"
                      style={{ height: "200px" }}
                    ></div>
                  ) : (
                    <img
                      className="card-img-top"
                      src={dojo.profile_image || logo}
                      alt={`${dojo.cargo} ${dojo.full_name}`}
                      preload="auto"
                      height={250}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = logo;
                      }}
                    />
                  )}
                </div>
                <div className="card-body pt-0">
                  {loading ? (
                    <div
                      className="skeleton-loading w-100 mb-2"
                      style={{ height: "20px" }}
                    ></div>
                  ) : (
                    <h5 className="card-title text-center">{`${dojo.cargo} ${dojo.full_name}`}</h5>
                  )}
                </div>
              </div>
              {!loading && (
                <p className="mt-1 w-100 float-left text-center">
                  <strong>
                    {dojo.is_branch_chief === "Si" &&
                      dojo.is_dojoOperator === "No" &&
                      "Branch Chief"}
                    {dojo.is_branch_chief === "No" &&
                      dojo.is_dojoOperator === "Si" &&
                      "Dojo Operador"}
                    {dojo.is_branch_chief === "Si" &&
                      dojo.is_dojoOperator === "Si" &&
                      "Branch Chief y Dojo Operador"}
                  </strong>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Cards.propTypes = {
  dojos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_image: PropTypes.string,
      cargo: PropTypes.string.isRequired,
      full_name: PropTypes.string.isRequired,
      is_branch_chief: PropTypes.string.isRequired,
      is_dojoOperator: PropTypes.string.isRequired,
      zona: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cards;

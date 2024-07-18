import React, { useEffect } from "react";
import { connect } from "react-redux";
import { get_dojos } from "../../redux/actions/dojos/dojos";
import {
  MapIcon,
  MapPinIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import UserDefault from "../../assets/img/logo.jpg";
const DojoCard = ({ dojo }) => (
  <div className="col-12 col-md-6 col-lg-4 mb-4">
    <div className="card h-100 shadow-sm dojo-card">
      <div className="card-body dojo-card-body">
        <h5 className="card-title dojo-card-title">
          {dojo.dojo_name || "Nombre del Dojo No Disponible"}
        </h5>
        <div className="dojo-card-content">
          <div className="dojo-card-info">
            <p className="dojo-card-text">
              {" "}
              <UserCircleIcon className="icon" /> <strong>Instructor:</strong>{" "}
              {dojo.cargo}{" "}
              {dojo.full_name || "Nombre del Instructor No Disponible"}
            </p>
            {
              /* If location is available, show location */
              dojo.location && (
                <p className="dojo-card-text">
                  {" "}
                  <MapIcon className="icon" /> {dojo.location}
                </p>
              )
            }
          </div>
          <div className="dojo-card-img-container">
            <img
              src={dojo.profile_image || UserDefault}
              className="dojo-card-img"
              alt={dojo.dojo_name || "Nombre del Dojo"}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = UserDefault;
              }}
              loading="lazy"
            />
          </div>
        </div>

        {/* If location is available, show button to open Google Maps */}
        {dojo.location ? (
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${dojo.location}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block dojo-card-button"
          >
            Ver en Google Maps <MapPinIcon className="icon" />
          </a>
        ) : (
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${dojo.location}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block dojo-card-button disabled"
          >
            Ubicación No Disponible <MapPinIcon className="icon" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const RegionSection = ({ region, dojos }) => (
  <div className="mb-4">
    <div className={`region-title-container ${region.toLowerCase()}`}>
      <h2 className="region-title">{region}</h2>
    </div>
    <div className="row">
      {dojos.map((dojo) => (
        <DojoCard key={dojo.id} dojo={dojo} />
      ))}
    </div>
  </div>
);

const Dojos = ({ get_dojos, dojosData }) => {
  useEffect(() => {
    get_dojos();
  }, [get_dojos]);

  if (dojosData.loading) {
    return (
      <div className="loading-container text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Cargando...</span>
        </div>
        <p>Cargando...</p>
      </div>
    );
  }

  if (dojosData.error) {
    return <p className="text-danger">{dojosData.error}</p>;
  }

  if (!dojosData.dojo_list || dojosData.dojo_list.length === 0) {
    return <p>No se encontraron dojos.</p>;
  }

  const regiones = ["Norte", "Centro", "Sur"];

  return (
    <div className="container-fluid py-5">
      {regiones.map((region) => {
        const regionDojos = dojosData.dojo_list
          .filter(
            (dojo) =>
              dojo.zona === region ||
              (region === "Centro" && dojo.zona === "Nacional")
          )
          .sort((a, b) => (a.zona === "Nacional" ? -1 : 1)); // Nacional primero
        return (
          <RegionSection key={region} region={region} dojos={regionDojos} />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  dojosData: state.dojos,
});

const mapDispatchToProps = (dispatch) => ({
  get_dojos: () => dispatch(get_dojos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dojos);

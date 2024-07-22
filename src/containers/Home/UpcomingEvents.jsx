import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {
  return (
    <div className="upcoming-events-container d-flex justify-content-between align-items-center p-4">
      <h3 className="upcoming-events-title mb-0">¡No te pierdas los próximos eventos!</h3>
      <Link to="/actividades" className="btn btn-primary btn-lg">
        Ver todo
      </Link>
    </div>
  );
}

export default UpcomingEvents;

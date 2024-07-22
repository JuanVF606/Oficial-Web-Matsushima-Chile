import React from "react";

const Events = ({ posts }) => {
  return (
    <div>
      {posts && posts.length > 0 ? <>hola</> : <>No hay actividades para mostrar</>}
    </div>
  );
};

export default Events;

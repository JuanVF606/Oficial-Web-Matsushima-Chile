import React from "react";

const Card = ({img, description}) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;

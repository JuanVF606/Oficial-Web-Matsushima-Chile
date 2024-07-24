import React from "react";
import { Button } from "react-bootstrap";
const Banner = ({ title, description, href, action }) => {
  return (
    <section className="cta-container py-5 text-center">
      <h2 className="mb-4">{title}</h2>
      <p className="mb-4">
        {description}
      </p>
      <Button href={href} >
        {action}
      </Button>
    </section>
  );
};

export default Banner;

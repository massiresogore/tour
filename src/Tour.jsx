import React from "react";

const Tour = ({ id, image, name, price, info }) => {
  return (
    <article className="single-tour" key={id}>
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h2>{name}</h2>
        <p>{info}</p>
      </div>
    </article>
  );
};

export default Tour;

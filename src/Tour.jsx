import React, { useState } from "react";

const Tour = ({ id, image, name, price, info, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour" key={id}>
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h2>{name}</h2>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className="info-btn"
            type="button"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          className="btn btn-block delete-btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          not interesting
        </button>
      </div>
    </article>
  );
};

export default Tour;

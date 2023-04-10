import React from "react";
import Tour from "./Tour";

const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>Our tour</h2>
        <div className="title-underline"></div>
        <div className="tours">
          {tours.map((tour) => {
            // const { image, name, id, price } = tour;
            return <Tour key={tour.id} {...tour} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;

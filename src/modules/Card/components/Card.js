import React from "react";

const Card = ({ name, autor, image }) => {
  return (
    <figure>
      <img src={image} alt={name} />
      <figcaption>{`Autor: ${autor}`}</figcaption>
    </figure>
  );
};

export default Card;

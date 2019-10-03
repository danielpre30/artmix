import React from "react";
import Card from "../../Card";

const CardList = ({ list }) => {
  return (
    <div>
      {list ? (
        list.map(({ name, autor, image }) => (
          <Card name={name} autor={autor} image={image} />
        ))
      ) : (
        <div>No se encontró ningún elemento </div>
      )}
    </div>
  );
};

export default CardList;

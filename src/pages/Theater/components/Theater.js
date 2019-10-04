import React, { Component } from "react";
import CardList from "../../../modules/CardList";

class Theater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storage: window.localStorage
    };
  }
  componentDidMount() {
    const storage = this.state.storage;
    storage.clear();
    const plays = [
      {
        name: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes Saavedra",
        image: "https://imagessl5.casadellibro.com/a/l/t5/45/9788466236645.jpg"
      },
      {
        name: "La Odisea",
        autor: "Homero",
        image:
          "https://www.popularlibros.com/imagenes_grandes/9788428/978842855162.JPG"
      }
    ];
    storage.setItem("plays", JSON.stringify(plays));
  }

  render() {
    const { storage } = this.state;
    const playsList = JSON.parse(storage.getItem("plays"));

    return (
      <>
        <h1>Artmix</h1>
        <h2>Theather</h2>
        <CardList list={playsList} />
      </>
    );
  }
}

export default Theater;

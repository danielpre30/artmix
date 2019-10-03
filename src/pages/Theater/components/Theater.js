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
    const books = [
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
    storage.setItem("books", JSON.stringify(books));
  }

  render() {
    const { storage } = this.state;
    const bookList = JSON.parse(storage.getItem("books"));

    return (
      <>
        <CardList list={bookList} />
      </>
    );
  }
}

export default Theater;

import React, { Component } from "react";
import CardList from "../../../modules/CardList";
import TheaterContext from "../../../modules/TheaterContext";

class Theater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storage: window.localStorage,
      playsList: [],
      showModal: false,
      addPlay: this.addPlay,
      handleInputChange: this.handleInputChange,
      toggleShowModal: this.toggleShowModal,
      newPlay: {}
    };
  }
  componentDidMount() {
    const storage = this.state.storage;
    const playsInLocalStorage = JSON.parse(storage.getItem("plays"));
    if (!playsInLocalStorage) {
      const plays = [
        {
          name: "Don Quijote de la Mancha",
          autor: "Miguel de Cervantes Saavedra",
          image:
            "https://imagessl5.casadellibro.com/a/l/t5/45/9788466236645.jpg"
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
    this.setState(state => {
      return { ...state, playsList: playsInLocalStorage };
    });
  }

  addPlay = () => {
    const { storage } = this.state;
    this.setState(state => {
      storage.setItem(
        "plays",
        JSON.stringify([...state.playsList, state.newPlay])
      );
      return {
        ...state,
        playsList: [...state.playsList, state.newPlay]
      };
    });
  };

  handleInputChange = (field, value) => {
    this.setState(state => {
      return { ...state, newPlay: { ...state.newPlay, [field]: value } };
    });
  };

  toggleShowModal = () => {
    this.setState(state => {
      return {
        ...state,
        showModal: !state.showModal
      };
    });
  };

  render() {
    return (
      <main className="page">
        <TheaterContext.Provider value={this.state}>
          <h1 className="page-header">Artmix</h1>
          <h2 className="page-title">Theather</h2>
          <CardList />
        </TheaterContext.Provider>
      </main>
    );
  }
}

export default Theater;

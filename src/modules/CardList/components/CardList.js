import React from "react";
import Card from "../../Card";
import TheaterContext from "../../TheaterContext";
import Modal from "../../../modules/Modal";

const CardList = () => {
  return (
    <div>
      <TheaterContext.Consumer>
        {({
          playsList,
          showModal,
          addPlay,
          handleInputChange,
          toggleShowModal,
          newPlay
        }) => {
          return (
            <>
              <button onClick={toggleShowModal}>Add</button>
              {playsList ? (
                <div className="cardList">
                  {playsList.map(({ name, autor, image }) => (
                    <Card name={name} autor={autor} image={image} />
                  ))}
                </div>
              ) : (
                <div>No se encontró ningún elemento </div>
              )}
              {showModal ? (
                <Modal>
                  <h1>Agregar obra</h1>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      addPlay();
                    }}
                  >
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      value={newPlay.nombre}
                      id="nombre"
                      type="text"
                      onChange={e =>
                        handleInputChange("nombre", e.target.value)
                      }
                    />
                    <label htmlFor="autor">Autor</label>
                    <input
                      value={newPlay.autor}
                      id="autor"
                      type="text"
                      onChange={e => handleInputChange("autor", e.target.value)}
                    />
                    <label htmlFor="image">Image</label>
                    <input
                      value={newPlay.image}
                      id="image"
                      type="text"
                      onChange={e => handleInputChange("image", e.target.value)}
                    />
                    <button>Add</button>
                  </form>
                </Modal>
              ) : null}
            </>
          );
        }}
      </TheaterContext.Consumer>
    </div>
  );
};

export default CardList;

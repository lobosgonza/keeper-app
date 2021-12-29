import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [cards, setCards] = useState([]);

  function addCard(newCard) {
    // console.log(inputCard);
    setCards((prevCards) => {
      return [...prevCards, newCard];
    });
  }

  function deleteCard(id) {
    setCards((prevCards) => {
      return prevCards.filter((eachCard, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addCard} />

      {cards.map((card, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={card.title}
            content={card.content}
            onDelete={deleteCard}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

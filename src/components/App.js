import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

//Color styling: bg and color

const [color, setColor] = useState("bgYellow");

function changeColor(tone){
  setColor(tone)
  console.log("2.- se activo changecolor + " + tone )
}
//End Color Styling



//Cards Array Control

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
      <Header getColor={changeColor} styleColor={color}/>
      <CreateArea onAdd={addCard} styleColor={color}/>

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

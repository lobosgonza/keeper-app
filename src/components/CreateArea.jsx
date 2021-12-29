import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { Alert } from "@mui/material";

function CreateArea(props) {
  const [inputCard, serInputCard] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { value, name } = event.target;

    serInputCard((prevItem) => {
      return {
        ...prevItem,
        [name]: value,
      };
    });
  }

  function submitInputCard(event) {
    event.preventDefault();
      props.onAdd(inputCard);
      serInputCard({ title: "", content: "" });
      setIsActive(false);
  }



// disable add button

function disableBtn(){
  // if (inputCard === { title: "", content: "" }){return disabled};
}


// Click Handler of Title Input

var [isActive, setIsActive] = useState(false);

function handleSelect(){
  setIsActive(true);
}

function handleUnselect(){
 setIsActive(false)
}

  return (
    <div>
      <form className="create-note" onFocus={handleSelect} onBlur={handleUnselect}>
        <input
          onChange={handleChange}
          value={inputCard.title}
          name="title"
          placeholder="Title"
          
        />
        <textarea
          onChange={handleChange}
          value={inputCard.content}
          name="content"
          placeholder="Take a note..."
          rows={!isActive?"1":"3"}
        />

        <Zoom in={true}>
          <Fab onClick={submitInputCard}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

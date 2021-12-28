import React, { useState } from "react";

function CreateArea(props) {


const [inputCard, serInputCard] = useState("");



function handleChange(event){
  const {value, name} = event.target;

  serInputCard((prevItem)=>{
  if (name === "title"){
    return {title: value, content:  prevItem.content}
  }else if (name === "content"){
return {title: prevItem.title, content: value}
  }
})
//  console.log(inputText)
}




// function addCard(event){
// event.preventDefault();
// console.log(inputText)
// }


  return (
    <div>
      <form>
        <input onChange={handleChange} value={inputCard.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={inputCard.content} name="content" placeholder="Take a note..." rows="3" />
        <button  onClick={(event)=>{event.preventDefault(); props.onAdd(inputCard)}}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
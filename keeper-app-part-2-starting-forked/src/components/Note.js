import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h2>{props.title}</h2>
      <p>{props.id}</p>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;

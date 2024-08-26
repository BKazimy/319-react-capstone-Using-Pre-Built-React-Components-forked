import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { Zoom } from "@mui/material";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Zoom in={true}>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>
          <ClearIcon />
        </button>
      </div>
    </Zoom>
  );
}

export default Note;

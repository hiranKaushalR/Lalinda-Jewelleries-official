import React from "react";
import NewHead from "./NewHead";
import NewBody from "./NewBody";
import NewGallery from "./NewGallery";

function NewCanvas() {
  return (
    <div className="new-container">
      <NewHead />
      <NewBody />
      <NewGallery />
    </div>
  );
}

export default NewCanvas;

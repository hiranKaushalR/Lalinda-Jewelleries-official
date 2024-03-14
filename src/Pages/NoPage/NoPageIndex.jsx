import React from "react";
import { Link } from "react-router-dom";

function NoPageIndex() {
  return (
    <div className="no-container">
      <div className="no-container--child">
        <h1>404 Error page not found</h1>
        <Link to='/'><button>Back to Home</button></Link>
      </div>
    </div>
  );
}

export default NoPageIndex;

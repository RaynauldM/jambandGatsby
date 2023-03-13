import * as React from "react";
import { Link } from "gatsby";

function ToHomeBtn() {
  return (
    <button id="toHomeBtn" className="btn">
      <Link to="/">terug</Link>
    </button>
  );
}

export default ToHomeBtn;

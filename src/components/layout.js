import * as React from "react";
import ToHomeBtn from "./toHomeBtn";
import { mainContainer } from "./layout.module.css";

export default function ({ children }) {
  return (
    <div className={mainContainer}>
      <main>{children}</main>

      {
        //if url is index page don't show to Home button, otherwise show it.
        window.location.href === "http://localhost:8000/" ? "" : <ToHomeBtn />
      }
    </div>
  );
}

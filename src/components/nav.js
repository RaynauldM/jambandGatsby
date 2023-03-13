import * as React from "react";
import { Link } from "gatsby";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/submit">Ik weet een leuk nummer</Link>
        </li>
        <li>
          <Link to="/playlist">Deze nummers lukken wel</Link>
        </li>
        <li>
          <Link to="/about">Informatie</Link>
        </li>
      </ul>
    </nav>
  );
}

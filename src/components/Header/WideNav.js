import React from "react";
import { Link } from "react-router-dom";

function WideNav() {
  return (
    <nav id="wide-nav">
      <ul>
        {["link1", "link2", "link3", "link4"].map((link, index) => (
          <li key={index}>
            <Link to="/" alt="">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default WideNav;

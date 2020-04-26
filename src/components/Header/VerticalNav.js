import React, { useState, useCallback } from "react";
import { IoMdMenu } from "react-icons/io";
import Button from "../common/Button";
import { Link } from "react-router-dom";

function VerticalNav() {
  const [visible, setVisible] = useState(null);

  const handleClick = useCallback(() => {
    setVisible(state => !state);
  }, []);

  return (
    <nav id="vertical-nav">
      <Button variant="filled" onClick={handleClick}>
        <IoMdMenu size="1.5rem" />
      </Button>
      <div
        id="fullscreen"
        className={`${visible ? "visible" : "hidden"}`}
        onClick={handleClick}
      />
      <div id="nav-container" className={`${visible ? "visible" : "hidden"}`}>
        <div id="nav-header">
          <Button variant="transparent" onClick={handleClick}>
            ×
          </Button>
        </div>
        <hr />
        <ul>
          {["link1", "link2", "link3", "link4"].map((link, index) => (
            <li key={index} onClick={handleClick}>
              <Link to="/" alt="">
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default VerticalNav;

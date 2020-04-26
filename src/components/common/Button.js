import React from "react";

function Button({ variant, children, onClick }) {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

import React from "react";
import "./css/button.css";

const Button = (props) => {
  return (
    <button>
      <span>{props.value}</span>
    </button>
  );
};

export default Button;

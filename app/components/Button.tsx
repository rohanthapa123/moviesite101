import React from "react";
import "./css/button.css";

const Button = (props: string) => {
  return (
    <button>
      <span>{props}</span>
    </button>
  );
};

export default Button;

import React from "react";
import "./Button.css";
const Button = ({ firstText, secondText }) => {
    return (
        <div className="button">
            <button>{firstText}</button>
            <button>{secondText}</button>
        </div>
    );
};

export default Button;

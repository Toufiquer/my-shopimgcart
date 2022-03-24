import React from "react";
import "./Button.css";
const Button = ({ firstText, secondText, firstAction }) => {
    return (
        <div className="button">
            <button onClick={() => firstAction(true)}>{firstText}</button>
            <button>{secondText}</button>
        </div>
    );
};

export default Button;

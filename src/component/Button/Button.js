import React from "react";
import "./Button.css";
const Button = ({
    firstText,
    secondText,
    firstAction,
    secondAction,
    id,
    stock,
}) => {
    return (
        <div className="button">
            {/* First Action for add item  */}
            <button onClick={() => firstAction(true, id)}>{firstText}</button>
            {/* Second Action for remove item */}
            <button onClick={() => secondAction(false, id)}>
                {secondText}
            </button>
        </div>
    );
};

export default Button;

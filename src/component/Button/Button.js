import React from "react";
import "./Button.css";
const Button = ({
    firstText,
    secondText,
    firstAction,
    secondAction,
    id,
    fullProduct,
    clearDB,
}) => {
    return (
        <div className="button">
            {/* First Action for add item  */}
            <button onClick={() => firstAction(true, id, fullProduct)}>
                {firstText}
            </button>
            {/* Second Action for remove item */}
            <button onClick={() => secondAction(false, id, fullProduct, true)}>
                {secondText}
            </button>
        </div>
    );
};

export default Button;

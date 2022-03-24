import React from "react";
import "./SingleButton.css";
const SingleButton = ({ firstAction, firstText }) => {
    return (
        <div className="single-button">
            <button onClick={() => firstAction(false)}>{firstText}</button>
        </div>
    );
};

export default SingleButton;

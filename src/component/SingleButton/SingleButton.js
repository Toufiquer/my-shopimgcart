import React from "react";
import "./SingleButton.css";
const SingleButton = ({ firstText }) => {
    return (
        <div className="single-button">
            <button>{firstText}</button>
        </div>
    );
};

export default SingleButton;

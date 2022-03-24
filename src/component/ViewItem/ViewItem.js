import React from "react";
import Cart from "../Cart/Cart";
import "./ViewItem.css";
const ViewItem = ({ firstAction }) => {
    let displayStyle = {
        display: "none",
    };
    if (firstAction) {
        console.log("true");
        displayStyle = {
            display: "block",
        };
    } else {
        displayStyle = {
            display: "none",
        };
    }
    return (
        <div style={displayStyle} className="view-item-container">
            <Cart></Cart>
            <Cart></Cart>
            <Cart></Cart>
            <Cart></Cart>
        </div>
    );
};

export default ViewItem;

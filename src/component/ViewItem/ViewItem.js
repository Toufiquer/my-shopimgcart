import React from "react";
import Cart from "../Cart/Cart";
import "./ViewItem.css";
const ViewItem = () => {
    return (
        <div className="view-item-container">
            <Cart></Cart>
            <Cart></Cart>
            <Cart></Cart>
            <Cart></Cart>
        </div>
    );
};

export default ViewItem;

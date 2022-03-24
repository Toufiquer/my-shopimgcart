import React from "react";
import Button from "../Button/Button";
import SingleButton from "../SingleButton/SingleButton";
import "./TotalCart.css";
const TotalCart = () => {
    return (
        <div className="total-cart">
            <div className="details">
                <h3>Summary</h3>
                <h4>Total Item: </h4>
                <h4>Total Price: </h4>
                <h4>Total Tax: </h4>
                <h4>Total shipping: </h4>
                <h4>Grand Total: </h4>
            </div>
            <Button firstText="Place Order" secondText="Cancel Order"></Button>
            <SingleButton firstText="Close Order"></SingleButton>
        </div>
    );
};

export default TotalCart;

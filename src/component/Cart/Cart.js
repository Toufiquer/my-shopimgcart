import React from "react";
import logo from "../img/logo.svg";
import Button from "../Button/Button";
import "./Cart.css";
const Cart = () => {
    return (
        <div className="cart">
            <img src={logo} alt="" />
            <div className="details">
                <h2>Name: Item name.</h2>
                <p>
                    This is product details. This is product details. This is
                    product details. This is product details. This is product
                    details. This is product details.{" "}
                </p>
            </div>
            <div className="view-button">
                <h3>Item: 4</h3>
                <Button firstText="+" secondText="-"></Button>
            </div>
        </div>
    );
};

export default Cart;

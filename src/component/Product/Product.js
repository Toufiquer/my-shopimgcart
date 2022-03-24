import React from "react";
import Button from "../Button/Button";
import logo from "../img/logo.svg";
import "./Product.css";
const Product = () => {
    return (
        <div className="product-item">
            <img src={logo} alt="" />
            <div className="details">
                <h2>This is Heading.</h2>
                <h2>This is Heading.</h2>
                <h2>This is Heading.</h2>
            </div>
            <Button firstText="Add" secondText="Remove"></Button>
        </div>
    );
};

export default Product;

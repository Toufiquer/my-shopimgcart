import React from "react";
import Product from "../Product/Product";
import TotalCart from "../TotalCart/TotalCart";
import ViewItem from "../ViewItem/ViewItem";

// import Cart from "../Cart/Cart";
import "./Products.css";
const Products = () => {
    return (
        <div className="main-container">
            <div className="first-container">
                <div className="view-container">
                    <ViewItem></ViewItem>
                </div>
                <div className="products-container">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </div>
            </div>
            <div className="cart-container">
                <TotalCart></TotalCart>
            </div>
        </div>
    );
};

export default Products;

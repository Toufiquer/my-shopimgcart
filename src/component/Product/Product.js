import React from "react";
import Button from "../Button/Button";
import "./Product.css";
const Product = ({ product }) => {
    let {
        category,
        id,
        img,
        name,
        price,
        quantity,
        ratings,
        ratingsCount,
        seller,
        shipping,
        stock,
    } = product;
    console.log(product);
    return (
        <div className="product-item">
            <img src={img} alt="" />
            <div className="details">
                <h3>{name}</h3>
                <h4>Price: {price}</h4>
                <p>Category: {category}</p>
                <p>Seller: {seller}</p>
                <p>Shipping: {shipping}</p>
                <p>Stock: {stock}</p>
                <p>Rating: {ratings}</p>
                <p>Ratings Count: {ratingsCount}</p>
            </div>
            <Button firstText="Add" secondText="Remove"></Button>
        </div>
    );
};

export default Product;

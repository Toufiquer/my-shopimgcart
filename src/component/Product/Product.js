import React from "react";
import Button from "../Button/Button";
import "./Product.css";
const Product = ({ product, firstAction, secondAction }) => {
    let {
        category,
        id,
        img,
        name,
        price,
        // quantity,
        ratings,
        ratingsCount,
        seller,
        shipping,
        stock,
    } = product;
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
            <Button
                firstAction={firstAction}
                secondAction={secondAction}
                id={id}
                firstText="Add"
                secondText="Remove"
            ></Button>
        </div>
    );
};

export default Product;

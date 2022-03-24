import React from "react";
import Button from "../Button/Button";
import "./Cart.css";
const Cart = props => {
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
    } = props.product;
    let { firstActionCart, secondActionCart } = props;
    // console.log(name, category, img, quantity);

    // console.log(firstActionCart);
    // console.log(secondActionCart);
    return (
        <div className="cart">
            <img src={img} alt="" />
            <div className="details">
                <h4>{name}</h4>
                <div className="sub-details">
                    <div className="first-box">
                        <p>Price: {price}</p>
                        <p>Category: {category}</p>
                        <p>Seller: {seller}</p>
                        <p>Shipping: {shipping}</p>
                    </div>
                    <div className="second-box">
                        <p>Stock: {stock}</p>
                        <p>Rating: {ratings}</p>
                        <p>Ratings Count: {ratingsCount}</p>
                    </div>
                </div>
            </div>
            <div className="view-button">
                <h3>Item: {quantity}</h3>
                <Button
                    firstAction={firstActionCart}
                    secondAction={secondActionCart}
                    id={id}
                    fullProduct={props.product}
                    firstText="+"
                    secondText="-"
                ></Button>
            </div>
        </div>
    );
};

export default Cart;

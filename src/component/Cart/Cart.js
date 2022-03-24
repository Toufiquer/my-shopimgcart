import React from "react";
import Button from "../Button/Button";
import "./Cart.css";
const Cart = props => {
    let { name, category, img, quantity, id } = props.product;
    let { firstActionCart, secondActionCart } = props;
    // console.log(name, category, img, quantity);

    // console.log(firstActionCart);
    // console.log(secondActionCart);
    return (
        <div className="cart">
            <img src={img} alt="" />
            <div className="details">
                <h2>Name: {name}</h2>
                <p>{category}</p>
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

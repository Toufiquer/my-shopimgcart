import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
    // console.log(cart);
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    for (let product of cart) {
        quantity = quantity + product.quantity;
        totalPrice = totalPrice + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    let tax = totalPrice * 0.1;
    tax = Number(tax.toFixed(2));

    return (
        <div className="cart">
            <h4>Total Order: {quantity}</h4>
            <h4> Total Price: {totalPrice}</h4>
            <h4>Total Shipping: {shipping}</h4>
            <h4>Tax: {tax}</h4>
            <h4>Grand Total: {totalPrice + shipping + tax}</h4>
        </div>
    );
};

export default Cart;

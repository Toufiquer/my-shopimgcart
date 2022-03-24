import React from "react";
import Button from "../Button/Button";
import SingleButton from "../SingleButton/SingleButton";
import "./TotalCart.css";
const TotalCart = ({ viewOrder, closeOrder, dbData, clearDB }) => {
    // console.log(dbData, dbData.length);
    console.log(dbData);

    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    let totalItem = 0;
    for (let product of dbData) {
        quantity = product.quantity;
        if (quantity > 0) {
            totalPrice += product.price * quantity;
            shipping += product.shipping * quantity;
        }
    }
    let tax = totalPrice * 0.1;
    tax = parseFloat(tax.toFixed(2));
    return (
        <div className="total-cart">
            <div className="details">
                <h3>Summary</h3>
                <h4>Total Item: {dbData.length}</h4>
                <h4>Total Price: {totalPrice}</h4>
                <h4>Total Tax: {tax}</h4>
                <h4>Total shipping: {shipping}</h4>
                <h4>Grand Total: {totalPrice + tax + shipping}</h4>
            </div>
            <Button
                firstAction={viewOrder}
                secondAction={clearDB}
                firstText="View Order"
                secondText="Cancel Order"
            ></Button>
            <SingleButton
                firstAction={closeOrder}
                firstText="Close Order"
            ></SingleButton>
        </div>
    );
};

export default TotalCart;

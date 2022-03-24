import React from "react";
import Cart from "../Cart/Cart";
import "./ViewItem.css";
const ViewItem = ({
    firstAction,
    products,
    firstActionCart,
    secondActionCart,
}) => {
    let newProducts = [];
    for (let product of products) {
        if (product.quantity > 0) {
            newProducts.push(product);
        }
    }
    let displayStyle = {
        display: "none",
    };
    if (firstAction) {
        // console.log("true");
        displayStyle = {
            display: "block",
        };
    } else {
        displayStyle = {
            display: "none",
        };
    }
    return (
        <div style={displayStyle} className="view-item-container">
            {newProducts.map(product => (
                <Cart
                    firstActionCart={firstActionCart}
                    secondActionCart={secondActionCart}
                    key={product.id}
                    product={product}
                ></Cart>
            ))}
        </div>
    );
};

export default ViewItem;

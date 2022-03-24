import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import "./ViewItem.css";
import { getItemFromDB } from "../Utility";
const ViewItem = ({
    firstAction,
    products,
    firstActionCart,
    secondActionCart,
}) => {
    const [orderCart, SetOrderCart] = useState([]);
    useEffect(() => {
        let newProductsDB = getItemFromDB();
        let newProducts = [];
        for (let id in newProductsDB) {
            let productQuantity = newProductsDB[id];
            let newProduct = products.find(product => product.id === id);
            if (newProduct && productQuantity !== 0) {
                newProducts.push(newProduct);
            }
        }
        SetOrderCart(newProducts);
    }, [products]);

    let displayStyle = {
        display: "none",
    };
    if (firstAction) {
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
            {orderCart.map(product => (
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

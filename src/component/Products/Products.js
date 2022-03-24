import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import TotalCart from "../TotalCart/TotalCart";
import ViewItem from "../ViewItem/ViewItem";
import { actionDB } from "../Utility";

// import Cart from "../Cart/Cart";
import "./Products.css";
const Products = () => {
    const [isAction, SetIsAction] = useState(false); // for view Order Box
    const [products, SetProducts] = useState([]); // fetch data from products.json=> public
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => SetProducts(data));
    }, []);
    // Add or Remove from DB and Cart
    let addOrRemove = (isAction, id) => {
        // if isAction is true then add
        if (isAction) {
            actionDB(isAction, id);
        } else {
            actionDB(isAction, id);
        }
    };
    // viewOrder is return a truthy value to display none or display block
    let orderAction = isAction => {
        if (isAction) {
            SetIsAction(true);
        } else {
            SetIsAction(false);
        }
    };
    return (
        <div className="main-container">
            <div className="first-container">
                <div className="view-container">
                    <ViewItem firstAction={isAction}></ViewItem>
                </div>
                <div className="products-container">
                    {products.map(product => (
                        <Product
                            product={product}
                            key={product.id}
                            firstAction={addOrRemove}
                            secondAction={addOrRemove}
                        ></Product>
                    ))}
                </div>
            </div>
            <div className="cart-container">
                <TotalCart
                    viewOrder={orderAction}
                    closeOrder={orderAction}
                ></TotalCart>
            </div>
        </div>
    );
};

export default Products;

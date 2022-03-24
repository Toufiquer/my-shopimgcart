import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import TotalCart from "../TotalCart/TotalCart";
import ViewItem from "../ViewItem/ViewItem";

// import Cart from "../Cart/Cart";
import "./Products.css";
const Products = () => {
    const [isAction, SetIsAction] = useState(false);
    const [products, SetProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => SetProducts(data));
    }, []);

    console.log(isAction);
    let viewOrder = isAction => {
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
                        <Product product={product}></Product>
                    ))}
                </div>
            </div>
            <div className="cart-container">
                <TotalCart
                    viewOrder={viewOrder}
                    closeOrder={viewOrder}
                ></TotalCart>
            </div>
        </div>
    );
};

export default Products;

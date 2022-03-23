import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./Product.css";
const Product = () => {
    const [products, SetProducts] = useState([]);
    const [cart, SetCart] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => SetProducts(data));
    }, []);
    let addToCart = product => {
        // console.log("click", product);
        let newCart = [...cart, product];
        SetCart(newCart);
    };
    return (
        <div className="products-container">
            <div className="products">
                {products.map(product => (
                    <Item
                        product={product}
                        addToCart={addToCart}
                        key={product.id}
                    ></Item>
                ))}
            </div>
            <div className="order-summary">
                <h2>Order Summary</h2>
                Order Item: {cart.length}
            </div>
        </div>
    );
};

export default Product;

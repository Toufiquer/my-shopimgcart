import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Item from "../Item/Item";
import { addToDB, getItem } from "../Utilities";
import "./Product.css";
const Product = () => {
    const [products, SetProducts] = useState([]);
    const [cart, SetCart] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => SetProducts(data));
    }, []);
    useEffect(() => {
        let getItemDB = getItem();
        // console.log(getItemDB);
        let newProductDB = [];
        for (let id in getItemDB) {
            let newItem = products.find(product => id === product.id);
            if (newItem) {
                let quantity = getItemDB[id];
                newItem.quantity = quantity;
                // console.log(newItem);
                newProductDB.push(newItem);
            }
        }
        SetCart(newProductDB);
    }, [products]);
    let addToCart = selectedProduct => {
        // console.log("click", selectedProduct);
        let newCart = [];
        let exit = cart.find(product => product.id === selectedProduct.id);
        if (!exit) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            let rest = cart.filter(
                product => product.id !== selectedProduct.id
            );
            exit.quantity = exit.quantity + 1;
            newCart = [...rest, exit];
        }
        // newCart = [...cart, selectedProduct];
        SetCart(newCart);
        addToDB(selectedProduct.id);
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Product;

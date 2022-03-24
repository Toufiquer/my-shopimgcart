import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import TotalCart from "../TotalCart/TotalCart";
import ViewItem from "../ViewItem/ViewItem";
import { actionDB, getItemFromDB } from "../Utility";
// import Cart from "../Cart/Cart";
import "./Products.css";
const Products = () => {
    const [isAction, SetIsAction] = useState(false); // for view Order Box
    const [products, SetProducts] = useState([]); // fetch data from products.json=> public
    const [dBProducts, SetDBProducts] = useState([]); // show summary only for first time load
    useEffect(() => {
        // show summary only for first time load
        let getItemDB = getItemFromDB();
        let newProductDB = [];
        for (let id in getItemDB) {
            let newItem = products.find(product => product.id === id);
            if (newItem) {
                let quantity = getItemDB[id];
                newItem.quantity = quantity;
                newProductDB.push(newItem);
            }
        }
        SetDBProducts(newProductDB);
    }, [products]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => SetProducts(data));
    }, []);
    // Add or Remove from DB and Cart
    let addOrRemove = (isAction, id, fullProducts) => {
        // if isAction is true then add
        if (isAction) {
            actionDB(isAction, id);

            // actionSummary(isAction, id);
        } else {
            actionDB(isAction, id);
            // actionSummary(isAction, id);
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
    let clearDB = isClearDB => {
        if (!isClearDB) {
            localStorage.removeItem("my-shopping-cart");
            SetDBProducts([]);
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
                    dbData={dBProducts}
                    viewOrder={orderAction}
                    closeOrder={orderAction}
                    clearDB={clearDB}
                ></TotalCart>
            </div>
        </div>
    );
};

export default Products;

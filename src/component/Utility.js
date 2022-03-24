// import React, { useEffect, useState } from "react";
// import { useState } from "react";
let getItemFromDB = () => {
    let getItem = {};
    let getItemDB = localStorage.getItem("my-shopping-cart");
    if (getItemDB) {
        getItem = JSON.parse(getItemDB);
    }
    return getItem;
};
let actionDB = (isAction, id) => {
    if (isAction) {
        // Stock update in future
        // if isAction is true then add to db
        let getItem = getItemFromDB();
        let isExist = getItem[id];
        if (isExist) {
            getItem[id] += 1;
            localStorage.setItem("my-shopping-cart", JSON.stringify(getItem));
        } else {
            getItem[id] = 1;
            localStorage.setItem("my-shopping-cart", JSON.stringify(getItem));
        }
    } else {
        let getItem = getItemFromDB();
        let isExist = getItem[id];
        if (isExist) {
            getItem[id] -= 1;
            localStorage.setItem("my-shopping-cart", JSON.stringify(getItem));
        }
    }
};
let findProduct = (id, products) => {
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
};
export { getItemFromDB, actionDB, findProduct };

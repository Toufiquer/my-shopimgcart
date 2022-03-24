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
let actionDB = (isAction, id, stock) => {
    if (isAction) {
        // Stock update in future
        // if isAction is true then add to db
        let getItem = getItemFromDB();
        let isExist = getItem[id];
        // console.log(isExist, stock);
        // if (stock > isExist) {
        if (isExist) {
            if (stock > isExist) {
                getItem[id] += 1;
            }
            localStorage.setItem("my-shopping-cart", JSON.stringify(getItem));
        } else {
            if (stock > 0) {
                getItem[id] = 1;
            }
            localStorage.setItem("my-shopping-cart", JSON.stringify(getItem));
        }
        // }
    } else {
        let getItem = getItemFromDB();
        let isExist = getItem[id];
        if (isExist) {
            if (getItem[id] > 0) {
                getItem[id] -= 1;
                localStorage.setItem(
                    "my-shopping-cart",
                    JSON.stringify(getItem)
                );
            }
        }
    }
};
export { getItemFromDB, actionDB };

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
export { getItemFromDB, actionDB };

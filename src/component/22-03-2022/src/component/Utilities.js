let getItem = () => {
    let getItemDB = {};
    let getItem = localStorage.getItem("cart-data");
    if (getItem) {
        getItemDB = JSON.parse(getItem);
    }
    return getItemDB;
};
let addToDB = id => {
    let getItemDB = getItem();
    let quantity = getItemDB[id];
    if (quantity) {
        quantity = quantity + 1;
        getItemDB[id] = quantity;
    } else {
        getItemDB[id] = 1;
    }
    getItemDB = JSON.stringify(getItemDB);
    localStorage.setItem("cart-data", getItemDB);
};
export { getItem, addToDB };

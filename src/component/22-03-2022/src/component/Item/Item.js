import React from "react";
import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Item = ({ product, addToCart }) => {
    // console.log(product);
    let { img, name, price, ratings, seller } = product;
    return (
        <div className="item">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h2>Name: {name}</h2>
                <p>Price: ${price}</p>
                <small>Manufacture: {seller}</small> <br />
                <small>Rating: {ratings} star</small>
            </div>
            <div className="add-to-cart">
                <button onClick={() => addToCart(product)}>
                    Add To Item <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </div>
    );
};

export default Item;

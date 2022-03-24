import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/Home">Home</a>
                        <a href="/About">About</a>
                        <a href="/Profile">Profile</a>
                        <a href="/Order">Order</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

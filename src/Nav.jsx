import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import profile from "./pic/profile.png";
import down_arrow from "./pic/down-arrow.png";
import shopping_basket from "./pic/shopping-basket.png";
import "./CSS/main.css";
import "./CSS/nav_css.css";

function Nav() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <nav>
            <Link to="/Home" className="bigtext">Book Guardian</Link>
            <div className="container">
                <input type="text" placeholder="Søg på bøgere" />
            </div>
            <img className="basket" src={shopping_basket} alt="Basket" />
            <Link to="/Profile" className="account">Min Konto</Link>
            <Link to="/Profile"><img className="profile" src={profile} alt="Profile" /></Link>
            <button className="dropdownbutton" onClick={togglePopup}>
                <img className="dropdownarrow" src={down_arrow} alt="Dropdown" />
            </button>
            {isPopupVisible && (
                <div className="popup-box">
                    <button className='signbutton'>Sign In</button>
                    <button className='signbutton'>Sign Up</button>
                </div>
            )}
        </nav>
    );
}

export default Nav;

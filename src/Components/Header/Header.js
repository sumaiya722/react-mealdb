import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <h2>Welcome to My Restaurant</h2>
            <h4>Please order the food you like</h4>
            <input className="my-input" type="text" placeholder="search your desired food" />
            <button className="btn">Order Confirm</button>
        </div>
    );
};

export default Header;
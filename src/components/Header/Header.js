import React from 'react';
import logo from './favicon.ico'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-logo'>
                <img src={logo} alt="" />
                <h1>Spor TS Club</h1>
            </div>
            <div>
                <a href="">Home </a>
                <a href="">Cart</a>
                <a href="">Buy Now</a>
                <a href="">About US</a>
            </div>
        </div>
    );
};

export default Header;
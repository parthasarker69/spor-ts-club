import React from 'react';
import './Product.css'

const Product = ({ product, handleCartButton }) => {
    const { id, name, price, picture } = product;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <div className='product-details'>
                <h2>{name}</h2>
                <h3>Price : ${price}</h3>
            </div>
            <button className='cart-btn' onClick={() => { handleCartButton(id) }}> ADD TO CART</button>
        </div>
    );
};

export default Product;
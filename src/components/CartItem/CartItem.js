import React from 'react';
import './CartItem.css'

const CartItem = ({ cartItem, removeCartItemHandler }) => {
    return (
        <div className='cart-item'>
            <img src={cartItem.picture} alt="" />
            <h3>{cartItem.name}</h3>
            <p>price : ${cartItem.price}</p>
            <button onClick={() => { removeCartItemHandler(cartItem.id) }}>Remove Item</button>
        </div>
    );
};

export default CartItem;
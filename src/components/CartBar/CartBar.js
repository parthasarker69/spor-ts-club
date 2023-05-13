import React from 'react';
import './CartBar.css'
import CartItem from '../CartItem/CartItem';

const CartBar = ({ cartItems, removeCartItemHandler }) => {
    return (
        <div >
            <div className='cart'>
                {cartItems.map(cartItem => <CartItem
                    cartItem={cartItem}
                    key={cartItem.id}
                    removeCartItemHandler={removeCartItemHandler}></CartItem>)}
            </div>
        </div>
    );
};

export default CartBar;

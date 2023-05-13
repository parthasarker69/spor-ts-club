import React, { useState } from 'react';
import './Products.css'
import Product from '../Product/Product';
import CartBar from '../CartBar/CartBar';

const Products = () => {


    const products = [
        {
            "id": "645fc00655c4f50d2417a713",
            "name": "Kakabura Bat",
            "picture": "https://tse2.mm.bing.net/th?id=OIP.AscH0DK0H2bDseX4v02LrQHaHa&pid=Api&P=0",
            "price": 60
        },
        {
            "id": "645fc0069b802dee5c23ec02",
            "name": "Cricek Ball",
            "picture": "https://tse1.mm.bing.net/th?id=OIP.GwcqbbGBKKOLZ7lbrsTMQwHaEK&pid=Api&P=0",
            "price": 7
        },
        {
            "id": "645fc0060c5599feb2a12dc9",
            "name": "Football",
            "picture": "https://tse1.mm.bing.net/th?id=OIP.x5th7LqLBtnaNjRkkdMUwwHaE8&pid=Api&P=0",
            "price": 37
        },
        {
            "id": "645fc0061b78c7e30c7d847c",
            "name": "Hockey Stick",
            "picture": "https://tse3.mm.bing.net/th?id=OIP.em6jFIzaL2uoR5ntK2ETzAHaHa&pid=Api&P=0",
            "price": 48
        },
        {
            "id": "645fc0066a269900431282ec",
            "name": "Badminton Bat",
            "picture": "https://tse2.mm.bing.net/th?id=OIP.vyZcaW5S5IxPdPcmFuJONwHaHa&pid=Api&P=0",
            "price": 42
        },
        {
            "id": "645fc006e0a61555bcfbb91b",
            "name": "Badminton flower",
            "picture": "https://tse1.mm.bing.net/th?id=OIP.tjvWoZPmPo0sPSPQFelONAHaFc&pid=Api&P=0",
            "price": 21
        },
        {
            "id": "645fc0065dea3ed911e6a4fc",
            "name": "Carom Board",
            "picture": "https://tse4.mm.bing.net/th?id=OIP.tm_FaBO_WUnhSO9tHNbvTgHaHa&pid=Api&P=0",
            "price": 51
        },
        {
            "id": "645fc0065dea3ed911e6a4fd",
            "name": "Dart Board",
            "picture": "https://tse2.mm.bing.net/th?id=OIP.HmkxVACVbzOmgW5N5TDXfAHaHo&pid=Api&P=0",
            "price": 51
        },
        {
            "id": "645fc0065dea3ed911e6a4fe",
            "name": "Chess Board",
            "picture": "https://tse3.mm.bing.net/th?id=OIP.aNIEX8vZIVupyHYtAsTMZQHaFj&pid=Api&P=0",
            "price": 51
        },
        {
            "id": "645fc0065dea3ed911e6a4fr",
            "name": "Dirt Board",
            "picture": "https://tse1.mm.bing.net/th?id=OIP.ev0R2JjwfVEPTbHHrMOmXwHaDj&pid=Api&P=0",
            "price": 51
        },
        {
            "id": "645fc0065dea3ed911e6a4ft",
            "name": "Volleyball Ball",
            "picture": "https://tse1.mm.bing.net/th?id=OIP.zAZX5D3cFiLdEwTIb7OnuwHaHa&pid=Api&P=0",
            "price": 51
        }
    ]
    let items = [];
    const [cartItems, setCartItems] = useState([])
    const handleCartButton = id => {
        const selectedItem = products.find(product => product.id === id);

        const isExisted = cartItems.find(item => item.id === id)

        if (!isExisted && cartItems.length <= 3) {
            items = [...cartItems, selectedItem];
            setCartItems(items);
        }
        else if (cartItems.length > 3) {
            alert('Your can maximum of 4 products')
        }
    }

    const removeCartItemHandler = id => {
        const remainingCartItems = cartItems.filter(cartItem => cartItem.id !== id);
        setCartItems(remainingCartItems);
    }
    const closeAllItemsHandler = () => {
        setCartItems([]);
    }

    const chooseOneItemHandler = () => {
        const a = Math.random() * 3;
        const b = Math.round(a);
        if (cartItems.length <= b) {
            chooseOneItemHandler();
            return 0;
        }
        const c = cartItems[b];
        alert(`You should buy ${c.name}  worth of price $ ${c.price}`)
        console.log(c);
    }
    return (
        <div className='web-body'>
            <div className='products'>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        handleCartButton={handleCartButton}
                    ></Product>)
                }
            </div>
            <div className="cart-bar">
                <CartBar
                    cartItems={cartItems}
                    removeCartItemHandler={removeCartItemHandler}
                ></CartBar>
                <button onClick={chooseOneItemHandler}>Choose one </button>
                <button onClick={closeAllItemsHandler}>Close all Items </button>
            </div>
        </div>
    );
};

export default Products;
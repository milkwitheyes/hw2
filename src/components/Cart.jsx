import React, { useState } from 'react';
import data from '../data/db.json';
import '../App.css';

const Cart = () => {
    const [items, setItems] = useState(data);

    return (
        <div className='cart'>
            {items.map((item, index) => (
                <div key={index}>
                    <h1>{item.title}</h1>
                    <img src={item.image} alt="" />
                    <p>{item.description}</p>
                    <p>Price: {item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default Cart;

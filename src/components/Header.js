import React, { useState } from "react";
import Cart from './Cart'

function Header() {
    const [cart, setCart] = useState(false);

    return (
        <header>
            <h1>Logo</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            </nav>
            <button onClick={() => setCart(true)}>Cart</button>
            {cart && <Cart cart={setCart} setCart={setCart} />}
        </header>
    )
}
export default Header
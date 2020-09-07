import React from 'react';

const Cart = (props) => {
    const cart=props.length;
    console.log(cart);
    return (
        <div>
            <h4>Order Summery: </h4>
            <p>Items Order: {props.cart.length}</p>
        </div>
    );
};

export default Cart;
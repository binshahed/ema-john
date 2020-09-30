import React from 'react';
import { Link } from 'react-router-dom';
import "../Cart/Cart.css"

const Cart = (props) => {
    const cart=props.cart;
    // console.log(cart);


    // const total=cart.reduce( (total, prd)=> total + prd.price , 0)
    let total = 0;
    for( let i=0; i<cart.length; i++){
        const product=cart[i];
        total=total+product.price;
    }
    
    let shipping=(0).toFixed(2);

    if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping=4.99
    }
    else if (total>0){
        shipping=12.99
    }

    const tax= (total/10).toFixed(2)
    const grandTotal=(total + Number(shipping)+ Number(tax)).toFixed(2)

    return (
        <div>
            <h4 className="text-danger">Order Summery: </h4>
            <p>Items Order: {cart.length}</p>
            <p>Total Price: {total.toFixed(2)} $</p>
            <p>Shipping Cost: {shipping} $</p>
            <p>tax: {tax} $</p>
            <p>Grand Total: {grandTotal} $</p>

            <Link to="/review">
                <button className="btn-add-to-cart">Order Review</button>
            </Link>

        </div>
    );
};

export default Cart;
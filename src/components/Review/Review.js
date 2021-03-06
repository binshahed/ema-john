import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { useHistory } from 'react-router-dom';

const Review = () => {

        const [cart, setCart]=useState([])
        const [orderPlaced, setOrderPlaced] =useState(false)
        const history= useHistory()

        const removeProduct= (productKey) => {
            console.log("Product Removed", productKey);
            const newCart=cart.filter( pd => pd.key !==productKey)
            setCart(newCart)
            removeFromDatabaseCart(productKey)
        }
        const handleProceedCheckout = () => {
            history.push('/shipment')
        }


        useEffect(()=>{
            const savedCart=getDatabaseCart();
        
            const productKeys=Object.keys(savedCart)

            const cartProducts=productKeys.map (key => {
            const product= fakeData.find(pd => pd.key===key);

            product.quantity=savedCart[key]
            return product
            }, []);
            setCart(cartProducts)
        
        }, [])
        return (
            <div className="shop-container">
            <div className="product-container">

            { 
                cart.map(pd => <ReviewItem 
                    removeProduct={removeProduct}
                    key={pd.key}
                    product={pd}></ReviewItem>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleProceedCheckout} className="btn-add-to-cart">Proceed Checkout</button>
                </Cart>
            </div>

            </div>
        );
};

export default Review;
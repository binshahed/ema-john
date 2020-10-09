import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {name, quantity, url, seller, price, img, key}=props.product
    return (
    <div>
        <div className="product">
            <div className="image">
                <img src={img} alt=""/>
            </div>
            <div className="body-text">
                <h3 className="product-name">{name}</h3>
                <p className="seller">by: <a href={url} target="_blank" >{seller}</a></p>
                <p className="price">${price}</p>
                <p className="stock">Quantity: {quantity}</p>
                <button 
                onClick={() => props.removeProduct(key)}
                className="btn-add-to-cart"
                >Remove</button>
         
            </div>
    
    
        </div>

    </div>
    );
};

export default ReviewItem;
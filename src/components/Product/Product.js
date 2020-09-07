import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'


const Product = (props) => {
// console.log(props);
return (
<div className="product">
    <div className="image">
        <img src={props.product.img} alt=""/>
    </div>
    <div className="body-text">
        <h3 className="product-name">{props.product.name}</h3>
        <p className="seller">by: <a href={props.product.url} target="_blank" rel="noopener noreferrer">{props.product.seller}</a></p>
        <p className="price">${props.product.price}</p>
        <p className="stock">only {props.product.stock} left in stock-order soon</p>
        <button
             className="btn-add-to-cart"
            onClick={()=>props.handleAddProduct(props.product)}
        >
            <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
    </div>
    
    
</div>
);
};

export default Product;
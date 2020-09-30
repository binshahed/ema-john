import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';


const Product = (props) => {
// console.log(props);
const {img, name, url, price, seller, stock, key }=props.product
return (
<div className="product">
    <div className="image">
        <img src={img} alt=""/>
    </div>
    <div className="body-text">
        <h3 className="product-name"><Link to={"/product/"+key}>{name}</Link></h3>
        <p className="seller">by: <a href={url} target="_blank" >{seller}</a></p>
        <p className="price">${price}</p>
        <p className="stock">only {stock} left in stock-order soon</p>
         { props.showAddToCart && <button
             className="btn-add-to-cart"
            onClick={()=>props.handleAddProduct(props.product)}>
            <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
    </div>
    
    
</div>
);
};

export default Product;
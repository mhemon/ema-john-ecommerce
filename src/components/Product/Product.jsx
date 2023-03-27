import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name,price,img,seller,ratings} = props.product
    const handleCartBtn = props.handleCartBtn
    return (
        <div className='products-container'>
            <div className='product-card'>
                <img src={img} alt="Product Image" />
                <div className='product-info'>
                    <h6 className='product-name'>{name}</h6>
                    <p>Price: ${price}</p>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings}</p>
                </div>
                <button onClick={() => handleCartBtn(props.product)} className='btn-cart'>
                    Add to Cart
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
            </div>
        </div>
    );
};

export default Product;
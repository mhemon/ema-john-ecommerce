import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,price,img,seller,ratings} = props.product
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
                <button className='btn-cart'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
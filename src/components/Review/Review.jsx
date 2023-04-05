import React from 'react';
import './Review.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Review = ({product, handleDeleteCartBtn}) => {
    const {id, img, name, price, quantity} = product
    return (
        <div className='review-card'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Product quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={() => handleDeleteCartBtn(id)} className='btn-container'>
            <FontAwesomeIcon className='btn-icon' icon={faTrashAlt} />
                </button>
        </div>
    );
};

export default Review;
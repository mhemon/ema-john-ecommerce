import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import './Orders.css'
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const products = useLoaderData()
    const [cart, setCart] = useState(products)

    const handleDeleteCartBtn = id => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <Review
                    key={product.id}
                    product={product}
                    handleDeleteCartBtn={handleDeleteCartBtn}></Review>)
                }
            </div>
            <div className='card-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;
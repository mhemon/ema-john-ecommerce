import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import './Orders.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const products = useLoaderData()
    const [cart, setCart] = useState(products)

    const handleDeleteCartBtn = id => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)
    }

    const clearCartBtn = () => {
        setCart([])
        deleteShoppingCart()
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
                <Cart cart={cart}
                clearCartBtn={clearCartBtn}>
                    <Link className='review-order-btn' to='/checkout'>
                        <button className='btn-procced'>Proceed Checkout
                        <FontAwesomeIcon icon={faCreditCard} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;
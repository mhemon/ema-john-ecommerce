import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect( () => {
        const storedCart = getShoppingCart()
        const savedCart = []
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    const handleCartBtn = (product) => {
        const newCart = [...cart,product]
        setCart(newCart)
        addToDb(product.id)
    }

    const clearCartBtn = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product 
                        product={product}
                        handleCartBtn={handleCartBtn}
                        key={product.id}
                        ></Product>)
                }
            </div>
            <div className='card-container'>
                <Cart cart={cart}
                clearCartBtn={clearCartBtn}>

                    <Link className='review-order-btn' to='/orders'>
                        <button className='btn-procced'>Review Order
                        <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
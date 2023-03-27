import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let totalPrice = 0
    let shipping = 0
    for(const product of cart){
        totalPrice += product.price
        shipping += product.shipping
    }

    const tax = totalPrice*7/100
    const grandTotal = totalPrice + shipping + tax
    return (
        <div className='cart'>
            <h3 style={{textAlign:'center', paddingTop:'28px', marginTop:'0'}}>Order Summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6 style={{marginLeft:'23px', marginTop:'10px', fontSize: '14px'}}>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;
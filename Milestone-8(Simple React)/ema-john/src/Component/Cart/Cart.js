import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    // const total = cart.reduce((previous, product) => previous + product.price, 0)

    let total = 0;
    // for (let product of cart) {
    //     total = total + product.price;
    // }

    let totalQuantity = 0;
    // console.log(cart);
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
        // console.log(totalQuantity, product.key);
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {totalQuantity}</h5>
            <br />
            <p>Total: ${total.toFixed(2)}</p>
            <p>Shipping: ${shipping}</p>
            <p>tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;
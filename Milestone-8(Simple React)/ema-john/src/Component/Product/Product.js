import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import Rating from 'react-rating';
import Cart from '../Cart/Cart';
const Product = (props) => {
    // console.log('product -', props.product);
    const { name, img, seller, price, stock, star } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="fa-regular fa-star icon-color"
                    fullSymbol="fa-solid fa-star icon-color"
                ></Rating>
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className='btn-regular'> {element} add to cart</button>
            </div>
        </div>
    );
};

export default Product;
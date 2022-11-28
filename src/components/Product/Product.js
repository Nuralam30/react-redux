import React from 'react';
import './Product.css';

const Product = (props) => {

    const {addToCart, product} = props;

    return (
        <div className='product'>
            <h3>{product.name}</h3>
            <button onClick={() => addToCart(product.id)}>add to cart</button>
        </div>
    );
};

export default Product;
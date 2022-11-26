import React from 'react';
import './Product.css';

const Product = (props) => {

    const { id, name } = props.product;

    return (
        <div className='product'>
            <h3>{name}</h3>
            <button>add to cart</button>
        </div>
    );
};

export default Product;
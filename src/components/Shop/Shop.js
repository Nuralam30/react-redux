import React from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const products = [
        { id: 1, name: 'Dell inspiron N5110 Laptop'},
        { id: 2, name: 'HP pabillion series Laptop'},
        { id: 1, name: 'Samsung bt5220 Laptop'},
        { id: 1, name: 'Dell N5210 Laptop'},
        { id: 1, name: 'Asus ultra G-series Laptop'}
    ]
    return (
        <div className='shop'>
            <h2>This is Shop</h2>
            {
                products.map( pd => <Product product={pd}></Product>)
            }
        </div>
    );
};

export default Shop;
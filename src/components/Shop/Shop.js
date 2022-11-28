import React from 'react';
import './Shop.css';
import Product from '../Product/Product';
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';
import { connect } from 'react-redux';

const Shop = (props) => {
    
    const {products, addToCart} = props;

    return (
        <div className='shop'>
            <h2>This is Shop</h2>
            {
                products.map( pd => <Product 
                    key={pd.id} 
                    product={pd} 
                    addToCart={addToCart}
                    ></Product>)
            }
        </div>
    );
};


const mapStateToProps = state =>{
    return{
        products: state.products
    }
}

const mapStateToDispatch = {
    addToCart: addToCart,
    removeFromCart: removeFromCart
}

// const connectToStore = connect(mapStateToProps, mapStateToDispatch);
// const connectedStore = connectToStore(Shop);

// connect(mapStateToProps, mapStateToDispatch)(Shop);

export default connect(mapStateToProps, mapStateToDispatch)(Shop);
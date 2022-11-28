import React from 'react';
import './Cart.css';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {
    
    const { cart, removeFromCart } = props;
    return (
        <div className='cart'>
            <h2>This is cart</h2>
            <ul>
                {
                    cart.map(id => <li key={id}>{id}<button onClick={() => removeFromCart(id)}>X</button></li>)
                }
            </ul>
        </div>
    );
};


const mapStateToProps = state =>{
    return{
        cart: state.cart,
        products: state.products
    }
}

const mapStateToDispatch = {
    removeFromCart: removeFromCart
}


const connectToStore = connect(mapStateToProps, mapStateToDispatch);

const connectedCart = connectToStore(Cart)

export default connectedCart;
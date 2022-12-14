
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    cart: [],
    products: [
        { id: 1, name: 'Dell inspiron N5110 Laptop'},
        { id: 2, name: 'HP pabillion series Laptop'},
        { id: 3, name: 'Samsung bt5220 Laptop'},
        { id: 4, name: 'Dell N5210 Laptop'},
        { id: 5, name: 'Asus ultra G-series Laptop'}
    ]
}

const cartReducers = (state = initialState, action) =>{
    switch(action.type){
        case ADD_TO_CART : 
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem];
            return {...state, cart : newCart}

            // return {...state, cart: [...state.cart, action.id]}

        case REMOVE_FROM_CART:
            const id = action.id;
            const remainingCart = state.cart.filter(item => item.cartId !== id);
            return {...state, cart: remainingCart}

        default:
            return state;
    }
}


export default cartReducers;

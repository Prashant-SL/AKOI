import { ActionTypes } from '../constants/action';

const intialState = {
    cart: [],
};

export const cartReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CART_PRODUCTS:
            return { ...state, cart: payload };
        default:
            return state;
    }
};

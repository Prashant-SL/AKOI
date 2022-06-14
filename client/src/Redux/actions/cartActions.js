import { ActionTypes } from '../constants/action';

export const setCart = (products) => {
    return {
        type: ActionTypes.SET_CART_PRODUCTS,
        payload: products,
    };
};

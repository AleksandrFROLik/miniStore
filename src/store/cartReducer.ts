import {ICartItem, IProduct} from "../types";
import {ActionCartType, actionTypes} from "./types";

let initialState:ICartItem[] = []


export const CartReducer = (state= initialState, action: ActionCartType) => {
    switch (action.type) {
        case actionTypes.CART_ADD_ITEM: {
            {
                const cart = [...state]
                const {count, product} = action.payload
                const foundProduct = cart.find(item => item._id === product._id)
            if(foundProduct) {
                foundProduct.count = count
            } else {
                cart.push({...product, count})
            }
                return cart
            }
        }
        case  actionTypes.CART_REMOVE_ITEM: {
            {
                return state.filter(item => item._id !== action.payload)
            }
        }
    }
    return state
}




import {IProduct} from "../types";
import {actionTypes} from "./types";

export const addToCart = (product: IProduct, count: number) => {
    return {
        type: actionTypes.CART_ADD_ITEM,
        payload: {product, count}
    }
}

export const removeFromCart = (productId: string) => {
    return {
        type: actionTypes.CART_REMOVE_ITEM,
        payload: productId
    }
}

export const changeQuantityHandler = (type: 'plus' | 'minus', product:IProduct) => {
    return {

    }
}
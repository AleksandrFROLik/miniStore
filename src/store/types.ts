import { IProduct } from "../types";

export enum actionTypes {
    CART_ADD_ITEM = "CART_ADD_ITEM",
    CART_REMOVE_ITEM = "CART_REMOVE_ITEM"
}

interface ICARTAddPayload {
    product: IProduct
    count: number
}

interface ICartAddItem {
    type:actionTypes.CART_ADD_ITEM
    payload:ICARTAddPayload
}

export interface ICartRemoveItem {
    type: actionTypes.CART_REMOVE_ITEM
    payload:string
}

export type ActionCartType =  ICartAddItem | ICartRemoveItem
import {combineReducers, createStore} from "redux";
import {CartReducer} from "./cartReducer";

 export let rootReducer = combineReducers({
    cart: CartReducer
})
export type rootReducerType = ReturnType<typeof rootReducer >

export let store = createStore(rootReducer)
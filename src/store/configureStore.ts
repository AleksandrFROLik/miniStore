import { createStore } from 'redux'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {rootReducer} from "./store"; // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
    whitelist: [ 'cart'],
}

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer)


export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
}


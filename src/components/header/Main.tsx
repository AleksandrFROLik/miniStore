import React, {FC, useState} from 'react';
import cn from 'classnames'
import logoImage from '../../assets/images/logo.svg'
import cartImage from '../../assets/images/cart.svg'
import {ICartItem} from "../../types";
import {v1} from "uuid";
import {UseTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {removeFromCart} from "../../store/Actions";


const Main: FC = () => {
    const [isShowCart, setIsShowCart] = useState(false)
    const cart = UseTypedSelector(state => state.cart)
    const dispatch = useDispatch()
    const total = cart.reduce((acc, item) => {
        return acc + item.price
    }, 0)

    const removeCartItemHandler = (id: string) => {
        dispatch(removeFromCart(id))
    }

    return (
        <div className='flex items-center justify-between relative  py-2 px-4'
             onClick={() => setIsShowCart(!isShowCart)}
             style={{
                 background: 'linear-gradient(90deg, rgba(255, 226, 0, 1) 0%, rgba(255, 0, 104, 1) 100%',
                 boxShadow: '1px 3px 30px 0px rgba(50, 50, 50, 0.75)'
             }}>
            <img src={logoImage} alt='logo' width='150'/>
            <button className='bg-transparent border-none relative'>
                <img src={cartImage} alt='cart'/>
                <div
                    className='text-red-500 absolute bottom-0 right-1 font-bold p-2 rounded-full bg-white w-5 h-5 flex items-center content-center'>{cart.length}</div>
            </button>
            <div className={cn('absolute  right-0 shadow-md  p-5 rounded-sm bg-white', {
                hidden: !isShowCart
            })} style={{
                top: '60px'
            }}>
                {
                    cart.map(item =>
                        <div className='flex items-center mb-4' key={item._id}>
                            <img src={item.imagePath} alt={item.name} width='55' height='55'/>
                            <div className='pl-5'>
                                <div>{item.name}</div>
                                <div>{`${item.count} x ${item.price.toLocaleString()}`}</div>
                                <button className='text-red-600 bg-transparent border-0'
                                        onClick={() => removeCartItemHandler(item._id)}
                                >delete
                                </button>
                            </div>
                        </div>
                    )}
                <div className='text-lg border-solid border-t-2 border-red-200 pt-1 mt-2'>
                    Total:<b>{total.toLocaleString()}</b>
                </div>

            </div>
        </div>

    );
};

export default Main;
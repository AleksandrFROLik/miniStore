import React, {FC, useState} from 'react';
import cn from 'classnames'
import logoImage from '../../assets/images/logo.svg'
import cartImage from '../../assets/images/cart.svg'
import {ICartItem} from "../../types";
import {v1} from "uuid";

const cartItems: ICartItem[] = [{
    _id: v1(),
    name: 'Ноутбук Lenovo ThinkPad P17 Gen 2',
    imagePath: 'https://items.s1.citilink.ru/1635387_v01_b.jpg',
    price: 3722,
    count: 1
}]

const removeCartItemHandler = (id: string) => {
    console.log('remove')
}

const Main: FC = () => {
    const [isShowCart, setIsShowCart] = useState(false)

    const total = cartItems.reduce((acc, item) => {
        return acc + item.price
    }, 0)

    return (
        <div className='flex items-center justify-between relative  py-2 px-4'
             onClick={() => setIsShowCart(!isShowCart)}
             style={{
                 background: 'linear-gradient(90deg, rgba(255, 226, 0, 1) 0%, rgba(255, 0, 104, 1) 100%',
                 boxShadow: '1px 3px 30px 0px rgba(50, 50, 50, 0.75)'
             }}>
            <img src={logoImage} alt='logo' width='150'/>
            <button className='bg-transparent border-none'>
                <img src={cartImage} alt='cart'/>
            </button>
            <div className={cn('absolute  right-0 shadow-md  p-5 rounded-sm bg-white', {
                hidden: !isShowCart
            })} style={{
                top: '60px'
            }}>
                {
                    cartItems.map(item =>
                        <div className='flex items-center' key={item._id}>
                            <img src={item.imagePath} alt={item.name} width='55' height='55'/>
                            <div className='pl-5'>
                                <div>{item.name}</div>
                                <div>{`${item.count} x ${item.price}`}</div>
                                <button className='text-red-600 bg-transparent border-0'
                                        onClick={()=>removeCartItemHandler(item._id)}
                                >delete</button>
                            </div>
                        </div>
                    )}
                <div className='text-lg border-solid border-t-2 border-red-200 pt-1 mt-2'>
                    Total:<b>{total}</b>
                </div>

            </div>
        </div>

    );
};

export default Main;
import React, {FC, useState} from 'react';
import cn from 'classnames'
import logoImage from '../../assets/images/logo.svg'
import {ICartItem} from "../../types";

const cartItems: ICartItem[] = [{
    name: 'Ноутбук Lenovo ThinkPad P17 Gen 2',
    imagePath: 'https://items.s1.citilink.ru/1635387_v01_b.jpg',
    price: 322,
    count: 1
}]

const Main: FC = () => {
    const [isShowCart, setIsShowCart] = useState(false)

    const total = cartItems.reduce((acc, item)=> {
        return acc + item.count
    },0)

    return (
        <div className='flex items-center content-between relative'>
            <img src={logoImage} alt='logo'/>
            <button className='bg-transparent border-none'></button>
            <div className={cn('absolute top-3 right-0 hidden', {
                block: isShowCart
            })}>
                {
                    cartItems.map(item =>
                        <div className='flex items-center'>
                            <img src={item.imagePath} alt={item.name} width='55' height='55'/>)
                            <div>{item.name}</div>
                            <div>{`${item.count} x ${item.price}`}</div>
                        </div>
                    )}
                <div className='text-lg'>
                    Total:<b>{total}</b>
                </div>
            </div>
        </div>

    );
};

export default Main;
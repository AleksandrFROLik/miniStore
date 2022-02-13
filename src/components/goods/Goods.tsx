import React from 'react';
import {v1} from 'uuid';
import {IProduct} from '../../types';
import ProductItem from "./productItem/ProductItem";

const products: IProduct[] = [
    {
        _id: v1(),
        name: 'Ноутбук Apple MacBook Pro 16.2',
        imagePath: 'https://items.s1.citilink.ru/1621979_v01_b.jpg',
        price: 2772,
    },
    {
        _id: v1(),
        name: 'Ноутбук ALIENWARE x15 R1, 15.6',
        imagePath: 'https://items.s1.citilink.ru/1656867_v01_b.jpg',
        price: 2787,
    },
    {
        _id: v1(),
        name: 'Ноутбук Ноутбук MSI Raider GE76 12UGS-440RU, 17.3 ',
        imagePath: 'https://items.s1.citilink.ru/1675495_v01_b.jpg',
        price: 2972,
    }]

const Goods = () => {
    return (
        <div className='mt-4 ' style={{backgroundColor: "gainsboro"}}>
            {
                products.map(product =>(
                    <ProductItem product={product} key={product._id}/>
                ) )
            }
        </div>
    );
};

export default Goods;
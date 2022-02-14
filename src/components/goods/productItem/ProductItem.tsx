import React, { FC } from 'react';
import {IProduct} from "../../../types";
import Quantity from "../../UI/Quantity/Quantity";

interface IProductItem {
    product:IProduct
}

const ProductItem:FC<IProductItem> = ({product}) => {
    const addHandler = () => {
        console.log(product._id)
    }

    return (
        <div className=' p-7 w-4/5 mx-auto mb-5 bg-white flex justify-center flex-col text-center items-center '
        style ={{
            borderRadius: '50px',
            background: 'linear-gradient(145deg, #cacaca, #f0f0f0)',
            boxShadow : '20px 20px 60px #bebebe, -20px -20px 60px #ffffff'
        }}>
           <img src={product.imagePath} alt={product.name} width='200'/>
            <div className='text-lg font-bold my-2'>{product.name}</div>
            <div className='text-sm text-grey-600'>{product.price}</div>
            <Quantity count={0}/>
            <button onClick={()=>addHandler()} className='bg-pink-500 text white rounded-sm px-3 py-1'>Into cart</button>
        </div>
    );
};

export default ProductItem;
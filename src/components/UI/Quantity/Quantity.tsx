import React, {FC} from 'react';
import {TypeSetState} from "../../../types";

type IQuantityType = {
    count: number,
    setCount:TypeSetState<number>
}

const Quantity= ({count, setCount}:IQuantityType) => {

    return (
        <div className='flex item-center'>
            <button onClick={() =>  count > 0 && setCount(count - 1)}>-</button>
            <input type='number' className='mx-2' onChange={e=>setCount(+(e.currentTarget))} value={count}/>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
};

export default Quantity;
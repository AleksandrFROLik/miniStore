import React, {FC, useState} from 'react';

const Quantity: FC<{ count: number }> = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <div className='flex item-center'>
            <button onClick={() => setCount(count - 1)}>-</button>
            <input type='number' className='mx-2' onChange={e=>setCount(+(e.currentTarget))} value={count}/>
            <button onClick={() => count >0 && setCount(count + 1)}>+</button>
        </div>
    );
};

export default Quantity;
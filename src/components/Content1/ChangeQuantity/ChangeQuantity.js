import React from 'react';
import { useState } from 'react';



function ChangeQuantity(props) {

    const [counter, setCounter] = useState(props.quantity)

    const increaseCounter = () => {
        setCounter(preState => preState + 1)
    }

    const decreaseCounter = () => {
        setCounter((preState) => preState > 0 ? preState - 1 : 0);
    }

    return (
        <div className='ChangeQuantity ' >
            <div className='sub height-30px'
                onClick={decreaseCounter}>
                <i className="fa-solid fa-minus"></i>
            </div>
            <p className='Quantity height-30px'>
                {counter}
            </p>
            <div className='add height-30px'
                onClick={increaseCounter}>
                <i className="fa-solid fa-plus "></i>
            </div>
        </div >
    );
}

export default ChangeQuantity;
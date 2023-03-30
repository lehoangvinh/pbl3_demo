import React from 'react';
import ChangeQuantity from '../ChangeQuantity/ChangeQuantity';
import '../ChangeQuantity/ChangeQuantity.css'



function CartItem(props) {
    return (
        <div className='CartItem'>
            <div className='CartItem-ItemHolder'>
                <img src={props.linkImg} alt='item' className='CartItem-ItemHolder-Image margin-auto' />
            </div>
            <div className='CartItem-ItemHolder'>
                <p className='margin-auto'>
                    {props.itemName}
                </p>
            </div>
            <div className='CartItem-ItemHolder'>
                <p className='margin-auto'>
                    {props.itemPrice}
                </p>
            </div>
            <div className='CartItem-ItemHolder margin-auto'>
                <div className='ChangeQuantity margin-auto'>
                    <ChangeQuantity quantity={props.itemQuantity} />
                </div>
            </div>
            <div className='CartItem-ItemHolder'>
                <p className='margin-auto'>
                    {props.itemSize}
                </p>
            </div>
        </div>
    );
}

export default CartItem;
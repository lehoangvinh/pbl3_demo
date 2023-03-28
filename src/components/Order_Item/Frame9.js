import React from 'react';
import CartItem from '../Content1/CartItem/CartItem';
import '../Content1/CartItem/CartItem.css';

function Frame9(props) {
    return (
        <div className='Frame9'>
            <div className='Frame9-Title'>
                Order Item
            </div>
            <div className='Frame9-Container'>
                <CartItem />
                <CartItem />
                <CartItem />
            </div>

        </div>
    );
}

export default Frame9;
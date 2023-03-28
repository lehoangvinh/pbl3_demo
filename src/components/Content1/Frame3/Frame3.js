import React from 'react';
import CartItem from '../CartItem/CartItem.js';
import '../CartItem/CartItem.css';
function Frame3(props) {
    return (
        <div className='Frame3'>

            {props.items.map(item => (
                <div key={item.id}>
                    <CartItem itemName={item.id} itemPrice={item.id} itemQuantity={item.id} itemSize={item.id} />
                </div>
            ))}

        </div>
    );
}

export default Frame3;
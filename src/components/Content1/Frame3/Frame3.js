import React from 'react';
import CartItem from '../CartItem/CartItem.js';
import '../CartItem/CartItem.css';
function Frame3(props) {
    return (
        <div className='Frame3'>

            {props.API.slice(0, 9).map(item => (
                <div key={item.id}>
                    <CartItem linkImg={item.url} itemName={item.title} itemPrice={item.albumId} itemQuantity={item.albumId} itemSize={item.albumId} />
                </div>
            ))}
            {
                props.hanldleSetSubTitle(props.API.slice(0, 9))
            }

        </div>
    );
}

export default Frame3;
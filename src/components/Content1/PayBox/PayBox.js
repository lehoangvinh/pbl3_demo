import React from 'react';
import CartItem from '../CartItem/CartItem.js';
import '../CartItem/CartItem.css';
import { useState } from 'react';

function PayBox(props) {
    // const [itemId, setItems] = useState([])
    // setItems(() => {
    //     return [...props.items.id]
    // })
    return (
        <div className='PayBox'>
            <div className='PayBox-Header'>
                <p>Order Sumary</p>
            </div>
            <div className='PayBox-Content'>
                <div className='PayBox-Content-Title'>
                    <p className='PayBox-Content-Item'>Subtitle ({ }):</p>
                    <p className='PayBox-Content-Item'>Shipping Fee:</p>
                    <p className='PayBox-Content-Item'>Total:</p>
                    <p className='PayBox-Content-Item'>Total:</p>

                </div>
                <div className='PayBox-Content-Price'>
                    <p className='PayBox-Content-Item'>100000 đ</p>
                    <p className='PayBox-Content-Item'>100000 đ</p>
                    <p className='PayBox-Content-Item'>100000 đ</p>
                    <p className='PayBox-Content-Item'>100000 đ</p>

                </div>
            </div>
            <div className='PayBox-Content-Button'>
                <button className='Button-Confirm' onClick={() => {
                    const message = document.getElementsByClassName('Button-Confirm');
                    alert(message[0].textContent);
                }}>Confirm</button>
            </div>
        </div>
    );
}

export default PayBox;
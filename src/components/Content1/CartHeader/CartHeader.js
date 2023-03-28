import React from 'react';


function CartHeader(props) {
    return (
        <div className='CartHeader'>
            <p className='CartHeader-Content'>Produce</p>
            <p className='CartHeader-Content'>Name</p>
            <p className='CartHeader-Content'>Price</p>
            <p className='CartHeader-Content'>Quantity</p>
            <p className='CartHeader-Content'>Size</p>

        </div>
    );
}

export default CartHeader;
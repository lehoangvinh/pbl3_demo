import React from 'react';

function Frame10(props) {
    return (
        <div className='Frame10'>
            <div className='Frame10-Header'>
                <p>Order Summary</p>
            </div>
            <div className='Frame10-Content'>
                <div className='Frame10-Content-Title'>
                    <p className='Frame10-Content-Title-Sub'>
                        Date:
                    </p>
                    <p className='Frame10-Content-Title-Sub'>
                        Subtotal :
                    </p>
                    <p className='Frame10-Content-Title-Sub'>
                        Shipping Fee :
                    </p>
                    <p className='Frame10-Content-Title-Sub'>
                        Total :
                    </p>

                </div>
                <div className='Frame10-Content-Detail'>
                    <p className='Frame10-Content-Title-Sub'>
                        Full Name:
                    </p>
                    <p className='Frame10-Content-Title-Sub'>
                        Email:
                    </p>
                    <p className='Frame10-Content-Title-Sub'>
                        Address:
                    </p>
                    <p className='Frame10-Content-Title-Sub'>
                        Address:
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Frame10;
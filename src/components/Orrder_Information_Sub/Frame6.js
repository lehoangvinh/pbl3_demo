import React from 'react';

const date = '123'
const total = 1000
function Frame6(props) {
    return (
        <div className='Frame6'>
            <div className='Frame6-Content'>
                <p className='Frame-Content-Sub'>{date}</p>
                <p className='Frame-Content-Sub'>{total}</p>
                <div className='Frame6-Icon Frame-Content-Sub' >
                    <i className="fa-solid fa-gear"></i>
                </div>
            </div>
        </div >
    );
}

export default Frame6;
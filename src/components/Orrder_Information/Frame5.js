import React from 'react';
import Frame6 from '../Orrder_Information_Sub/Frame6';
import '../Orrder_Information_Sub/Frame6.css';


function Frame5(props) {
    return (
        <div className='Frame5'>
            <div className='Frame5-Title'
                style={{ textAlign: 'center', fontSize: '20px', fontWeight: 500, margin: '12px' }}
            >
                <p>Order Information</p>
            </div>
            <div className='Frame5-Item'>
                <Frame6 />
            </div>
            <div className='Frame5-Item'>
                <Frame6 />
            </div>
            <div className='Frame5-Item'>
                <Frame6 />
            </div>
            <div className='Frame5-Item'>
                <Frame6 />
            </div>
        </div >
    );
}

export default Frame5;
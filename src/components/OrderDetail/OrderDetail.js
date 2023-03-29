import React from 'react';

import Header from '../Header/Header.js';
import '../Header/Header.css';
import Hero from '../Hero/Hero.js';
import '../Hero/Hero.css';
import Footer from '../Footer/Footer.js';
import '../Footer/Footer.css';

import "../Shipping_Information/Frame8.css";
import Frame8 from "../Shipping_Information/Frame8.js";
import "../Order_Item/Frame9.css";
import Frame9 from "../Order_Item/Frame9.js";
import "../Order_Summary/Frame10.css";
import Frame10 from "../Order_Summary/Frame10.js";

function OrderDetail(props) {
    return (
        <>
            <Header />
            <Hero title="ORDER DETAIL" />
            <div>
                <div className='OrderDetail'>
                    <div className="Content-Test">
                        <div className="Content-F7">
                            <Frame10 />
                        </div>
                        <div className="Content-F8">
                            <Frame8 />
                        </div>
                        <div className="Content-F9">
                            <Frame9 />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default OrderDetail;
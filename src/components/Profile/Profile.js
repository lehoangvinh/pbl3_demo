import React from 'react';

import Header from '../Header/Header.js';
import '../Header/Header.css';
import Hero from '../Hero/Hero.js';
import '../Hero/Hero.css';
import Footer from '../Footer/Footer.js';
import '../Footer/Footer.css';

import "../ProfileCard/ProfileCard.css";
import ProfileCard from "../ProfileCard/ProfileCard.js";
import "../Orrder_Information/Frame5.css";
import Frame5 from "../Orrder_Information/Frame5.js";
import "../Shipping_Information/Frame8";
import Frame8 from "../Shipping_Information/Frame8.js";

function Profile(props) {
    return (
        <>
            <Header />
            <Hero title="PROFILE" />
            <div className='Profile'>
                <div className="Profile-Section">
                    <div className="Content-F7">
                        < ProfileCard />
                    </div>
                    <div className="Content-F8">
                        < Frame8 />
                    </div>
                    <div className="Content-F9">
                        <Frame5 />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Profile;
import React from 'react';
import Header from '../Header/Header.js';
import '../Header/Header.css';
import Hero from '../Hero/Hero.js';
import '../Hero/Hero.css';
import Footer from '../Footer/Footer.js';
import '../Footer/Footer.css';
import "../EditProfie_Sub/Frame11.css";
import Frame11 from "../EditProfie_Sub/Frame11.js";


function EditProfile(props) {
    return (
        <>
            <Hero title="EDIT PROFILE" />
            <div className='EditProfile'>
                <Frame11 />
            </div>
        </>
    );
}

export default EditProfile;
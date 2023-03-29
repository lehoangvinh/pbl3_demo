import React from 'react';
import { Routes, Route } from 'react-router-dom'


import Header from '../Header/Header.js';
import '../Header/Header.css';
import Slider from '../Slider/Slider.js';
import '../Slider/Slider.css';
import Footer from '../Footer/Footer.js';
import '../Footer/Footer.css';
import AboutUs from '../AboutUs/AboutUs';
import '../AboutUs/AboutUs.css';
import Box3 from '../Box3/Box3';
import '../Box3/Box3.css';
import Box3_Contact from '../Box3_Contact/Box3_Contact';
import '../Box3_Contact/Box3_Contact.css';

const image1 = `${process.env.PUBLIC_URL}/img/avatarUser.png`;
const image2 = `${process.env.PUBLIC_URL}/img/cafe_sua.png`;
const image3 = `${process.env.PUBLIC_URL}/img/avatarUser.png`;

const name1 = "Lê Hoàng Vinh"
const name2 = "Hoàng Vinh"
const name3 = "Vinh"

// const images = [image1, image2, image3]
// const names = [name1, name2, name3]

const users = [
    {
        "name": name1,
        "image": image1,
    },
    {
        "name": name2,
        "image": image2,
    },
    {
        "name": name3,
        "image": image3,
    }

]

function Home(props) {
    return (
        <>
            <Header name="Lê Hoàng Vinh" />
            <Slider />
            <div className='Home'>
                <div className='Home-AboutUs'>
                    <AboutUs />
                </div>
                <div className='Our-Service Home-Box3'>
                    <Box3 title="OUR SERVICE" users={users} />
                </div>
                <div className='Our-Service Home-Box3'>
                    <Box3 title="OUR TEAM" users={users} />
                </div>
                <div className='Our-Service Home-Box3'>
                    <Box3_Contact />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
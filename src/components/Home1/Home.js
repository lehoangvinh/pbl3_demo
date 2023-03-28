import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import '../AboutUs/AboutUs.css';
import Box3 from '../Box3/Box3';
import '../Box3/Box3.css';

function Home(props) {
    return (
        <>
            <div className='Home'>
                <AboutUs />
            </div>
            <div className='Our-Service'>
                <Box3 />
            </div>
        </>
    );
}

export default Home;
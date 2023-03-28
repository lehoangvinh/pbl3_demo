import React from 'react';
const img = `${process.env.PUBLIC_URL}/img/Sl2.png`;

function AboutUs(props) {
    return (
        <div className='AboutUs' id='About'>
            <h2 className='AboutUs-Title'>
                ABOUT US
            </h2>
            <div className='AboutUs-Content'>
                <div className='AboutUs-Image'>
                    <img src={img} alt='anh mo ta' style={{ width: "100%", height: '100%' }} />
                </div>
                <div className='AboutUs-Detail'>
                    <h3>
                        Our drinks are all about authenticity and quality.
                    </h3>
                    <p>
                        It has always been and it always will be.
                        We are passionate about sourcing the finest ingredients, blending them perfectly and soaking them carefully before brewing and serving them with a smile.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default AboutUs;
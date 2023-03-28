import React from 'react';
const logo_icon = `${process.env.PUBLIC_URL}/img/logo.jpg`;

var logo_content = "DUT MILK TEA";
function Header(props) {
    return (
        <div className="Header">
            <div className="Header-Logo">
                {/* <i className="fa-brands fa-facebook"></i> */}
                <img src={logo_icon} alt="logo" className="Header-Logo-Image" />
                <p className="Logo-Content">{logo_content}</p>
            </div>
            <div className='Header-Navbar'>
                <div className='NavbarItem'>
                    <a href='Home'>
                        HOME</a>
                </div>
                <div className='NavbarItem'>
                    <a href='#About'>
                        ABOUT
                    </a>
                </div>
                <div className='NavbarItem'>
                    <a href='Menu'>
                        MENU
                    </a>
                </div>
                <div className='NavbarItem'>
                    <a href='Contact'>
                        CONTACT
                    </a>
                </div>
            </div>
            <div className="Header-Account">
                <i className="fa-regular fa-user"></i>
                <i className="fa-solid fa-cart-shopping"></i>

            </div>
        </div >
    );
}

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
const logo_icon = `${process.env.PUBLIC_URL}/img/logo.jpg`;

var logo_content = "DUT MILK TEA";
function Header(props) {
    return (
        <div className="Header">
            <div>
                <a href='/cart' className="Header-Logo" >
                    <img src={logo_icon} alt="logo" className="Header-Logo-Image" />
                    <p className="Logo-Content">{logo_content}</p>
                </a>
            </div>
            <div className='Header-Navbar'>
                <div className='NavbarItem'>
                    <a href='/'>
                        HOME</a>
                </div>
                <div className='NavbarItem'>
                    <a href='#About'>
                        ABOUT
                    </a>
                </div>
                <div className='NavbarItem'>
                    <Link to='menu'>
                        MENU
                    </Link>
                </div>
                <div className='NavbarItem'>
                    <a href='#contact'>
                        CONTACT
                    </a>
                </div>

            </div>
            <div className="Header-Account">
                <Link to='/profile' className='Header-Account-User'>
                    <p>Hi, {props.name}</p>
                    <i className="fa-regular fa-user" ></i>
                </Link>
                <Link to='/'>
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>

            </div>
        </div >
    );
}

export default Header;
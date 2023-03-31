import React from 'react';
import { Link } from 'react-router-dom';
const logo_icon = `${process.env.PUBLIC_URL}/img/logo.jpg`;

var logo_content = "DUT MILK TEA";


function scrollToElement(selector) {
    var element = document.querySelector(selector);

    element !== null ? element.scrollIntoView({ behavior: "smooth" }) : window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}


function Header(props) {
    return (
        <div className="Header">
            <div onClick={() => {
                props.handleActive(true)
            }}>
                <a href='/' className="Header-Logo" >
                    <img src={logo_icon} alt="logo" className="Header-Logo-Image" />
                    <p className="Logo-Content">{logo_content}</p>
                </a>
            </div>
            {

                props.active && <div className='Header-Navbar'>
                    <div className='NavbarItem'>
                        <Link to='/' onClick={() => scrollToElement("#")}>
                            HOME</Link>
                    </div>
                    <div className='NavbarItem' onClick={() => scrollToElement("#about")} >
                        ABOUT
                    </div>
                    <div className='NavbarItem' >
                        <Link to='/menu' onClick={() => scrollToElement("#")}>
                            MENU
                        </Link>
                    </div>
                    <div className='NavbarItem' onClick={() => scrollToElement("#service")}>
                        SERVICE
                    </div>
                    <div className='NavbarItem' onClick={() => scrollToElement("#team")}>
                        TEAM
                    </div>
                    <div className='NavbarItem' onClick={() => scrollToElement("#contact")}>
                        CONTACT
                    </div>
                </div>
            }
            <div className="Header-Account" onClick={() => {
                props.handleActive(false)
            }}>
                <Link to='/profile' className='Header-Account-User'>
                    <p>Hi, {props.name}</p>
                    <i className="fa-regular fa-user" ></i>
                </Link>
                <Link to='/cart'>
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
                <Link to='/profile'>
                    <i className="fa-solid fa-right-from-bracket"></i>
                </Link>
            </div>
        </div >
    );
}

export default Header;
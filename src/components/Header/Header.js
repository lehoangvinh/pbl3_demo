import React from 'react';
import { Link, Route } from 'react-router-dom';
const logo_icon = `${process.env.PUBLIC_URL}/img/logo.jpg`;

var logo_content = "DUT MILK TEA";


function scrollToElement(selector) {
    var element = document.querySelector(selector);
    var home = document.querySelector('#ourProducts');

    element !== null ? element.scrollIntoView({ behavior: "smooth" }) : window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}


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
                    <a href='/' >
                        HOME</a>
                </div>
                <div className='NavbarItem' onClick={() => scrollToElement("#about")} >

                    ABOUT

                </div>
                <div className='NavbarItem'>
                    <a href='menu'>
                        MENU
                    </a>
                    {/* <Link to='menu'>
                        MENU
                    </Link> */}
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
                {/* 
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#service">Service</Nav.Link>
                        <Nav.Link href="#team">Team</Nav.Link>
                        <Nav.Link href="#service">Menu</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link> */}
            </div>
            <div className="Header-Account">
                <Link to='/profile' className='Header-Account-User'>
                    <p>Hi, {props.name}</p>
                    <i className="fa-regular fa-user" ></i>
                </Link>
                <Link to='/cart'>
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>

            </div>
        </div >
    );
}

export default Header;
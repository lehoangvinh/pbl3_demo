import React from "react";
import { Link } from 'react-router-dom';

const footer_logo = `${process.env.PUBLIC_URL}/img/footer-image.png`;

function scrollToElement(selector) {
    var element = document.querySelector(selector);

    element !== null ? element.scrollIntoView({ behavior: "smooth" }) : window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}

function Footer(props) {
    return (
        <div className="Footer">
            <div className="Footer-First">
                <img src={footer_logo} className="Footer-Image" alt="logo" />
                <p className="Footer-Title">MILK TEA POINT</p>
                <p className="Footer-Content">
                    Our Business Is Always The Way You Like. We Don't Make Your Milk Tea.
                    We Make Your Day. We’re Not Just A Business. We’re A Lifestyle.
                </p>
            </div>
            <div className="Footer-Second">
                <div className="Footer-Par">
                    <p className="Footer-Header">QUICK LINK</p>
                    <ul className="Footer-Links">
                        <li className="Footer-Link">
                            <Link to='/' onClick={() => scrollToElement("#")}>
                                HOME</Link>
                        </li>
                        <li className="Footer-Link" onClick={() => scrollToElement("#about")}>
                            About
                        </li>
                        <li className="Footer-Link" onClick={() => scrollToElement("#service")}>
                            Our Service
                        </li>
                        <li className="Footer-Link" onClick={() => scrollToElement("#produce")}>
                            Our Produce
                        </li>
                        <li className="Footer-Link" onClick={() => scrollToElement("#team")}>
                            Our Team
                        </li>
                        <li className="Footer-Link" onClick={() => scrollToElement("#contact")}>
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
            <div className="Footer-Third">
                <div className="Footer-Par">
                    <p className="Footer-Third-Header Footer-Header">
                        CONTACT INFORMATION
                    </p>
                    <ul className="Footer-Links">
                        <li className="Footer-Link">
                            <div className="Footer-Link-Icon">
                                <i className="fa-sharp fa-solid fa-phone">
                                </i>
                            </div>
                            <p className='Footer-Infor'>
                                0987789999
                            </p>
                        </li>
                    </ul>
                    <ul className="Footer-Links">
                        <li className="Footer-Link">
                            <div className="Footer-Link-Icon">
                                <i className="fa-brands fa-facebook"></i>
                            </div>
                            <p className='Footer-Infor'>
                                <a href="https://www.facebook.com/">
                                    DUT FACEBOOK
                                </a>
                            </p>
                        </li>
                    </ul>
                    <ul className="Footer-Links">
                        <li className="Footer-Link">
                            <div className="Footer-Link-Icon">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <p className='Footer-Infor'>
                                <a href="https://mail.google.com/mail/u/0/#inbox">
                                    DUT.MILK@gmail.com
                                </a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;

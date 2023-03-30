import React from "react";

function Box3_Contact(props) {
    return (
        <div className="Box3_Contact">
            <div className="Box3_Contact-Title" id='contact'>
                <h2>CONTACT US</h2>
            </div>

            <div className="Box3_Contact-Par">
                <div className="Box3_Contact-First BG">
                    <i className="fa-solid fa-phone Box3_Contact_Icon"></i>
                    <p>09999988899</p>
                    <p>09999988899</p>
                    <p>09999988899</p>
                </div>

                <div className="Box3_Contact-Second BG">
                    <i className="fa-solid fa-clock Box3_Contact_Icon"></i>
                    <p>7h - 12h</p>
                    <p>12h-18h</p>
                    <p>18h-22h</p>
                </div>

                <div className="Box3_Contact-Third BG">
                    <i className="fa-solid fa-map-location-dot Box3_Contact_Icon"></i>
                    <a href="https://www.google.com/maps/place/54+Nguy%E1%BB%85n+L%C6%B0%C6%A1ng+B%E1%BA%B1ng,+Ho%C3%A0+Kh%C3%A1nh+B%E1%BA%AFc,+Li%C3%AAn+Chi%E1%BB%83u,+%C4%90%C3%A0+N%E1%BA%B5ng+550000,+Vi%E1%BB%87t+Nam/@16.073867,108.1473086,17z/data=!3m1!4b1!4m6!3m5!1s0x314218d68e8ccb03:0x64dc2cb3e38bbdaf!8m2!3d16.0738619!4d108.1498889!16s%2Fg%2F11csnvrh83?hl=vi-VN" target="_blank">54 Nguyễn Lương Bằng, Hòa Khánh Bắc, Liên Chiểu, Đà Nẵng</a>
                </div>
            </div>
        </div>
    );
}

export default Box3_Contact;
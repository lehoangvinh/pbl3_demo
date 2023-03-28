import React from "react";

function Box3_Contact(props) {
    return (
        <div className="Box3_Contact">
            <div className="Box3_Contact-Title">
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
                    <p>54 Nguyễn Lương Bằng, Hòa Khánh Bắc, Liên Chiểu, Đà Nẵng</p>
                    {/* <p>09999988899</p>
                    <p>09999988899</p> */}
                </div>
            </div>
        </div>
    );
}

export default Box3_Contact;
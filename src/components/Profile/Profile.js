import React from 'react';


import "../ProfileCard/ProfileCard.css";
import ProfileCard from "../ProfileCard/ProfileCard.js";
import "../Orrder_Information/Frame5.css";
import Frame5 from "../Orrder_Information/Frame5.js";
import "../Shipping_Information/Frame8";
import Frame8 from "../Shipping_Information/Frame8.js";

function Profile(props) {
    return (
        <div className='Profile'>
            <div className="Profile-Section">
                <div className="Content-F7">
                    < ProfileCard />
                </div>
                <div className="Content-F8">
                    < Frame8 />
                </div>
                <div className="Content-F9">
                    <Frame5 />
                </div>
            </div>
        </div>
    );
}

export default Profile;
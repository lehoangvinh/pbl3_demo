import React from 'react';
import { Link } from 'react-router-dom';

const avatarURL = `${process.env.PUBLIC_URL}/img/avatarUser.png`;

const fullName = 'Lê Hoàng Vinh'
const email = '123@gmail.com'

function ProfileCard(props) {
    return (
        <div className='ProfileCard'>
            <div className='ProfileCard-Avatar'>
                <img src={avatarURL} alt='Avatar' />
            </div>
            <div className='ProfileCard-Profile'>
                <p>
                    {fullName}
                </p>
                <p>
                    {email}
                </p>
                <button >
                    <Link to='/editprofile'>
                        EditProfile
                    </Link>
                </button>
            </div>
        </div >
    );
}

export default ProfileCard;
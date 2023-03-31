import React from "react";

function Box3(props) {
    const users = props.users;
    return (
        <div className="Box3">
            <div className="Box3-Title">
                <h2>{props.title}</h2>
            </div>

            <div className="Box3-Par">
                <div className="Box3-Content">
                    <div className="Box3-Content-Image">
                        <img src={users[0].image} alt="avatar" style={{ maxWidth: "100%", maxHeight: "100%", margin: 'auto' }} />
                    </div>
                    <div className="Box3-Content-Name">
                        <h4 style={{ margin: "auto" }}>{users[0].name}</h4>
                    </div>
                </div>

                <div className="Box3-Content" >
                    <div className="Box3-Content-Image">
                        <img src={users[1].image} alt="avatar" style={{ maxWidth: "100%", maxHeight: "100%", backgroundSize: 'cover' }} />
                    </div>
                    <div className="Box3-Content-Name">
                        <h4 style={{ margin: "auto" }}>{users[1].name}</h4>
                    </div>
                </div>

                <div className="Box3-Content">
                    <div className="Box3-Content-Image" style={{ maxWidth: "100%", maxHeight: "100%" }}>
                        <img src={users[2].image} alt="avatar" />
                    </div>
                    <div className="Box3-Content-Name">
                        <h4 style={{ margin: "auto" }}>{users[2].name}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Box3;
/* <div className='Box3-Par'>
                {
                    users.map((user) => (
                        <div key={user.name}>
                            <div className='Box3-Content'>
                                <div className='Box3-Content-Image'>
                                    <img src={user.image} alt='avatar' />
                                </div>
                                <div className='Box3-Content-Name'>
                                    <p>
                                        {user.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div> */

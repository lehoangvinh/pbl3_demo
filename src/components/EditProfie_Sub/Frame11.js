import React from 'react';

function Frame11(props) {
    return (
        <div className='Frame11'>
            <div className="EditProfile-Content">
                <div className="EditProfile-Content-Sub">
                    <p>Fullname:</p>
                    <input type='text'></input>
                </div>
                <div className="EditProfile-Content-Sub">
                    <p>Email:</p>  <input type='text'></input>
                </div>
                <div className="EditProfile-Content-Sub">
                    <p>Address:</p>  <input type='text'></input>
                </div>
            </div>
            <div className="EditProfile-Button">
                <button
                    className='EditProfile-Button-Button'
                    onClick={() => {
                        alert(123)
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Frame11;
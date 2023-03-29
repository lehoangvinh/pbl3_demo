import React from 'react';

function MenuBar(props) {
    return (
        <div className='MenuBar'>
            <div className='MenuBar-Left'>
                <div className='MenuBar-First Menu_Selected'>
                    <p>All Produce</p>
                </div>
                <div className='MenuBar-Second Menu_Selected'>
                    <p>Previous Order</p>
                </div>
            </div>
            <div className='MenuBar-Right'>
                <div className="MenuBar-Right-Boder">
                    <input type="text" placeholder="  Search.." />
                    <div className='MenuBar-Search'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuBar;
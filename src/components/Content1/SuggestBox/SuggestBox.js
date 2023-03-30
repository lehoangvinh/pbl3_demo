import React from 'react';
import SuggestListBox from './SuggestListBox/SuggestListBox.js';
import './SuggestListBox/SuggestListBox.css'
function SuggestBox(props) {
    return (
        <div className='SuggestBox'>
            <div className='SuggestBox-Title'>
                Suggest For You
            </div>
            <div>
                <SuggestListBox API={props.items} />
            </div>
        </div>
    );
}

export default SuggestBox;
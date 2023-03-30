import React from 'react';
import Header from '../Header/Header.js';
import '../Header/Header.css';
import Slider from '../Slider/Slider.js';
import '../Slider/Slider.css';
import Footer from '../Footer/Footer.js';
import '../Footer/Footer.css';
import MenuBar from '../MenuBar/MenuBar.js';
import '../MenuBar/MenuBar.css';
import Category from '../Category/Frame13.js';
import '../Category/Frame13.css';
import SuggestListBox from '../Content1/SuggestBox/SuggestListBox/SuggestListBox.js';
import '../Content1/SuggestBox/SuggestListBox/SuggestListBox.css';

import Box3_Contact from "../Box3_Contact/Box3_Contact.js";
import "../Box3_Contact/Box3_Contact.css";


import { useState, useEffect } from 'react';

function Menu(props) {
    const [title, setTitle] = useState('All')
    const [drinks, setDrinks] = useState(0)
    const [foods, setFoods] = useState(0)

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(
                json => {
                    console.log(json)
                    setItems(json)
                }
            )
        return
    }, [])

    const handleChangeTitle = (text) => {
        setTitle(text);
        console.log(title)
    }
    return (
        <>
            <Slider />
            <div className='Menu'>
                <MenuBar />
                <div className='Menu-Header' id='ourProducts'>
                    <h1>
                        Our Products
                    </h1>
                </div>
                <div className='Menu-Category'>
                    <h2>
                        {title}
                    </h2>
                </div>
                <div className='Menu-Content'>
                    <div className='Menu-Content-Category'>
                        <Category drinks={10} foods={6} handleChangeTitle={handleChangeTitle} />
                    </div>
                    <div className='Menu-Content-ListItem'>
                        <SuggestListBox API={items} />
                    </div>
                </div>
                <Box3_Contact />
            </div>

        </>
    );
}

export default Menu;
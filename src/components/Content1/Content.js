import React from "react";

import Header from '../Header/Header.js';
import '../Header/Header.css';
import Hero from '../Hero/Hero.js';
import '../Hero/Hero.css';
import Footer from '../Footer/Footer.js';
import '../Footer/Footer.css';

import "./CartHeader/CartHeader.css";
import CartHeader from "./CartHeader/CartHeader.js";
import "./Frame3/Frame3.css";
import Frame3 from "./Frame3/Frame3.js";
import "./PayBox/PayBox.css";
import PayBox from "./PayBox/PayBox.js";
import "./SuggestBox/SuggestBox.css";
import SuggestBox from "./SuggestBox/SuggestBox.js";




import { useState, useEffect } from "react";

function Content(props) {
    const [items, setItems] = useState([])
    const [subtitle, setSubTitle] = useState(0)
    const [totalFee, setTotalFee] = useState()

    const hanldleSetSubTitle = (arrs) => {
        arrs.reduce((acc, cur) => {
            return acc + cur
        }, 0)
    }
    setSubTitle(() => {
        // hanldleSetSubTitle
    })

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


    return (
        <>
            <Hero title="CART" />
            <div className="Content">
                <div className="Content-Cart-Item">
                    <CartHeader />
                </div>
                <div className="Content-Detail">
                    <div className="Content-Frame3">
                        <Frame3
                            API={items}
                            hanldleSetSubTitle={hanldleSetSubTitle}
                        />
                    </div>
                    <div className="Content-PayBox">
                        <PayBox
                            items={items}
                            subtitle={subtitle}
                            totalFee={totalFee}
                            discount='100000'
                        />
                    </div>
                </div>
                <SuggestBox className="Content-Suggestbox" items={items} />
            </div>
        </>
    );
}

export default Content;

// import React from 'react';
// import './CartHeader/CartHeader.css';
// import CartItem from './CartHeader/CartHeader.js';
// import './Frame3/Frame3.css';
// import Frame3 from './Frame3/Frame3.js';
// import './PayBox/PayBox.css';
// import PayBox from './PayBox/PayBox.js';
// import './SuggestBox/SuggestBox.css';
// import SuggestBox from './SuggestBox/SuggestBox.js';

// function Content(props) {

//     return (
//         <div className='Content'>
//             <div className='Content-Cart-Item'>
//                 <CartItem />
//             </div>
//             <div className='Content-Detail'>
//                 <div className='Content-Frame3'>
//                     <Frame3 />
//                 </div>
//                 <div className='Content-PayBox'>
//                     <PayBox />
//                 </div>
//             </div>
//             <SuggestBox className='Content-Suggestbox' />
//         </div>
//     );
// }

// export default Content;

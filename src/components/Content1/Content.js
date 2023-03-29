import React from "react";

import Header from '../Header/Header.js';
import '../Header/Header.css';
import Hero from '../Hero/Hero.js';
import '../Hero/Hero.css';
import Footer from '../Footer/Footer.js';
import '../Footer/Footer.css';

import "./CartHeader/CartHeader.css";
import CartItem from "./CartHeader/CartHeader.js";
import "./Frame3/Frame3.css";
import Frame3 from "./Frame3/Frame3.js";
import "./PayBox/PayBox.css";
import PayBox from "./PayBox/PayBox.js";
import "./SuggestBox/SuggestBox.css";
import SuggestBox from "./SuggestBox/SuggestBox.js";




import { useState, useEffect } from "react";

function Content(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error));
        console.log(data);
    }, []);

    return (
        <>
            <Header />
            <Hero title="CART" />
            <div className="Content">
                <div className="Content-Cart-Item">
                    <CartItem />
                </div>
                <div className="Content-Detail">
                    <div className="Content-Frame3">
                        <Frame3 items={data} />
                    </div>
                    <div className="Content-PayBox">
                        <PayBox items={data} />
                    </div>
                </div>
                <SuggestBox className="Content-Suggestbox" />
            </div>
            <Footer />
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

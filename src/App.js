import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home1/Home';
import Menu from './components/Menu/Menu';
import Profile from './components/Profile/Profile';
import EditProfile from './components/EditProfile/EditProfile';
import Content from './components/Content1/Content';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const item = `${process.env.PUBLIC_URL}/img/cafe_den.png`;


function App(props) {
    return (
        <div>
            < Header name="Lê Hoàng Vinh" />
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route to="/about" />
                </Route>
                <Route path="/menu" element={<Menu />}>  </Route>
                <Route path="/profile" element={<Profile />}>  </Route>
                <Route path="/editprofile" element={<EditProfile />}>  </Route>
                <Route path="/cart" element={<Content />}>  </Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
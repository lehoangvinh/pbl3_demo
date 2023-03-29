import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import './components/Header/Header.css';
import Header from './components/Header/Header.js';
import './components/Hero/Hero.css';
import Hero from './components/Hero/Hero.js';
import './components/Content1/Content.css';
import Content from './components/Content1/Content.js';
import './components/Footer/Footer.css';
import Footer from './components/Footer/Footer.js';
import OrderDetail from './components/OrderDetail/OrderDetail.js';
import './components/OrderDetail/OrderDetail.css';
import EditProfile from './components/EditProfile/EditProfile';
import './components/EditProfile/EditProfile.css';
import Profile from './components/Profile/Profile';
import './components/Profile/Profile.css';
import Home from './components/Home1/Home';
import './components/Home1/Home.css';
import Slider from './components/Slider/Slider';
import './components/Slider/Slider.css';
import Menu from './components/Menu/Menu';
import './components/Menu/Menu.css';
import App from './App';


import Todo from './Todo.js';



const logo = `${process.env.PUBLIC_URL}/img/logo.jpg`;

const DataContext = React.createContext();

export default DataContext;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Header /> */}
      {/* <Hero title="CART" /> */}
      {/* <Slider /> */}
      {/* <Todo /> */}
      {/* <Home /> */}
      {/* <Menu /> */}
      {/* <EditProfile /> */}
      {/* <OrderDetail /> */}
      {/* <Profile /> */}
      {/* <Content /> */}
      {/* <Footer /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

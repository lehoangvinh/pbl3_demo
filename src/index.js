import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

// import CSS
import './index.css';
import './components/Header/Header.css';
import './components/Hero/Hero.css';
import './components/Content1/Content.css';
import './components/Footer/Footer.css';
import './components/OrderDetail/OrderDetail.css';
import './components/EditProfile/EditProfile.css';
import './components/Profile/Profile.css';
import './components/Home1/Home.css';
import './components/Slider/Slider.css';
import './components/Menu/Menu.css';
import "./components/Shipping_Information/Frame8.css";
import "./components/Order_Item/Frame9.css";
import "./components/Order_Summary/Frame10.css";
// end import CSS
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

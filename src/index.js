import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from "./components/Navbar";
import App from './App';
import Products from "./components/Products";
import AboutUs from './components/AboutUs'
import ContactUs from "./components/ContactUs"
import { BrowserRouter, Route, Link } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={App} />
      <Route exact path="/Products" component={Products} />
      <Route exact path="/AboutUs" component={AboutUs} />
      <Route exact path="/ContactUs" component={ContactUs} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

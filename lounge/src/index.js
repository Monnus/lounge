import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const IMAGES={
  arm1Chair:require("./images/AccentChair1.png"),
  arm2Chair:require("./images/AccentChair2.png"),
  arm3Chair:require("./images/AccentChair3.png"),
  arm4Chair:require("./images/AccentChair4.png"),
  arm5Chair:require("./images/AccentChair5.png"),
  imagesSlider:{
 imgs :[require("./images/sliderIMG/armchair1.png"),require("./images/sliderIMG/armchair2.png"),require("./images/sliderIMG/armchair3.png")]
  }
}

const svgICons={
  upArrow:require("./svgIcons/up-arrow-svgrepo-com.svg"),
  downArrow:require("./svgIcons/down-arrow-svgrepo-com.svg"),
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


export {
  IMAGES,svgICons
};
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import store from './Store'

// Fonts
import './assets/fonts/EudoxusSans-Bold.ttf'
import './assets/fonts/EudoxusSans-ExtraBold.ttf'
import './assets/fonts/EudoxusSans-ExtraLight.ttf'
import './assets/fonts/EudoxusSans-Light.ttf'
import './assets/fonts/EudoxusSans-Medium.ttf'
import './assets/fonts/EudoxusSans-Regular.ttf'


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

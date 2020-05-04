import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import $ from 'jquery';
window.jQuery = $; // Shimming
window.$ = $; // Shimming

import fittext from '../../node_modules/fittext/dist/jquery.fittext';
import flexslider from '../../node_modules/flexslider/jquery.flexslider';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

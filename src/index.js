import reportWebVitals from './reportWebVitals';

//dependencies
import React from 'react';
import ReactDOM from 'react-dom';

//functional views
import { ApprendendoReact } from './views/ApprendendoReact';

//assets
import './assets/css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <ApprendendoReact />
  </React.StrictMode>,
  document.getElementById('root') // document.querySelector('#root') // is the same?
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
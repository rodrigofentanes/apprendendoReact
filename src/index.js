import reportWebVitals from './reportWebVitals';

//dependencies
import React from 'react';
import ReactDOM from 'react-dom';

//views
import { ApprendendoReact } from './views/ApprendendoReact';

//redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './views/MiniProjects/Songs/reducers';

//assets
import './assets/css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
      <ApprendendoReact />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') // document.querySelector('#root') // is the same?
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
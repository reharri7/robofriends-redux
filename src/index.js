import React from 'react';
import ReactDOM from 'react-dom';

import CardList from './CardList';
import { robots } from './robots';
import 'tachyons';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <CardList robots={ robots }/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

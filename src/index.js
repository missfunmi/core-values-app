import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '@atlaskit/css-reset';
import "intro.js/introjs.css";
import './index.css';
import Main from './components/Main';

ReactDOM.render(
  <BrowserRouter>
    <Main/>
  </BrowserRouter>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './components/App';

ReactDOM.render(
  <BrowserRouter>                               {/* do not use - Link, switch, route, ... - outside BrowserRouter */}
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
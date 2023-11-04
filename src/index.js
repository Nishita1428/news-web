import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import the CSS file
import App from './App';
import * as serviceWorker from './serviceWorker'; // You can remove this line if not needed

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// You can remove this section if not needed
serviceWorker.unregister();
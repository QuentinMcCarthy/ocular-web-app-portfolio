import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

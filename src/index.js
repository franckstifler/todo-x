import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'uikit/dist/css/uikit.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'uikit/dist/js/uikit.min';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
        console.log('service worker registered!');
    });
}

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
// import DetailInvoice from './components/Invoice/DetailInvoice';
import ModalExample from './components/Test';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ModalExample />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

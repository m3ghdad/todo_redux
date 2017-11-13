import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
// import App from './components/app'
import Root from './components/root'

const store = configureStore;
//Remove after testing
// -------------------
window.store = store;


//--------------------


document.addEventListener('DOMContentLoaded', ()=> {
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

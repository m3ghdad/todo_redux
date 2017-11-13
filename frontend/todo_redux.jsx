import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
//
// window.sotre = configureStore;

document.addEventListener('DOMContentLoaded', ()=> {
  ReactDOM.render(
    <h1>Todos App</h1>,
    document.getElementById('root')
  );
});

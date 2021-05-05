import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

// let posts = [
//   {id: 1, message: 'hi,how are you?', likesCount:52},
//   {id: 2, message: 'first post', likesCount:25}, 
//   {id: 2, message: 'flowes', likesCount:64}, 
//   {id: 2, message: 'hate tiktok', likesCount:12} 
// ]

// let dialogs = [
//   {id: 1, name: 'Pok'},
//   {id: 2, name: 'Spok'},
//   {id: 3, name: 'Rok'},
//   {id: 4, name: 'Line'},
//   {id: 5, name: 'Xio8'},
//   {id: 6, name: 'Slojna'}
// ]

// let messages = [
//   {id: 1, message: 'Hi'},
//   {id: 2, message: 'Hey'},
//   {id: 3, message: 'Hello'},
//   {id: 4, message: 'Line'},
//   {id: 5, message: 'Xio8'},
//   {id: 6, message: 'Slojna'}
// ]                               Перекинул в state.js

ReactDOM.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

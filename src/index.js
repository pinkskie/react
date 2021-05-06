import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals';
// import {addPost, subscribe, updateNewPostText} from './redux/state';
import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';


// addPost('www.s')

let rerenderEntireTree = (state) => {
  ReactDOM.render(
  
  <React.StrictMode>
    <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
  </React.StrictMode>,
  
  document.getElementById('root'));
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
// ReactDOM.render(
  
//   <React.StrictMode>
//     <App state={state} addPost={addPost}/>
//   </React.StrictMode>,
  
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

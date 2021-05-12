import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'

// let rerenderEntireTree = (state) => { +
  ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <App state={state} dispatch={store.dispatch.bind(store)} store={store}/> */}
    </Provider>
  </React.StrictMode>,
  
  document.getElementById('root'));
// }
// rerenderEntireTree(); +

// rerenderEntireTree(store.getState());
// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

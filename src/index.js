import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'


  let postsData = [
    { id: 1, likeCount: 3, message: "How are guf in your house?" },
    { id: 2, likeCount: 0, message: "la la la " },
    { id: 3, likeCount: 2, message: "first Guf crtrtm!!" },
    { id: 4, likeCount: 0, message: "Alo Guf came in to" },
    { id: 5, likeCount: 4, message: "Hello Dniwe" },
    { id: 6, likeCount: 0, message: "Yo nub came in to your ho...." },
    { id: 7, likeCount: 11, message: " like dno?" }
  ]
  let dialogData = [
    { id: 1, name: "Gufiy" },
    { id: 2, name: "Nykyhvir" },
    { id: 3, name: "Dniwe" },
    { id: 4, name: "Ilona" },
    { id: 5, name: "Alesya" },
    { id: 6, name: "Katya" },
    { id: 7, name: "Sveta" }
  ]

  let messagesData = [
    { id: 1, message: "How Guf came in to your house?" },
    { id: 2, message: "la la la " },
    { id: 3, message: "How Guf cam!!" },
    { id: 4, message: "How Guf came in to" },
    { id: 5, message: "Hello Dniwe" },
    { id: 6, message: "H11112 came in to your ho...." },
    { id: 7, message: "hjkk to your house?" }
  ]


ReactDOM.render(
   
  <React.StrictMode>
    <BrowserRouter>
    <App dataposts={postsData} dData={dialogData} mData={messagesData} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Scapper from './Scrapper';
// import Header from './Header'
// import Scrapper from './Scrapper';



// ReactDOM.render(
//   <React.StrictMode>
//   <Header/> 
//   <Scapper/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );




const http= require('http');
const https= require('https');
const express = require('express');

const port =3000;
const host ='localhost'
const {amazon} = require('./amazonScrapper');

const app = express();

const start=()=>{
  console.log('Amazon Scrapping is running');
  amazon();
}

const server = https.createServer(app);

server.listen(port,host,()=>{
  console.log("server is running at "+host+":"+port)
  start();
})







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))  <Scapper/>  <App />
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


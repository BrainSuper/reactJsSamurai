import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const dialogsData = [
    {id: 1, name: 'Clyde'},
    {id: 2, name: 'Melina'},
    {id: 3, name: 'Ronda'},
    {id: 4, name: 'Charles'},

]
const messageData = [
    {id: 1, message: 'Abraabraabraabra'},
    {id: 2, message: 'SSKKKDLLFKKAKKSLLFKKS'},
    {id: 3, message: 'ASFLSFGSOE#%#FDGKDSGKDSLH'},
]
const postData= [
    {id: 1, post: 'This is first post'},
    {id: 2, post: 'This is second post'},
    {id: 3, post: 'This is third post'},
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messageData={messageData} postData={postData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

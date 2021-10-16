import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/App/app";
import './index.module.css';

let dialogsData = [
    {id:1, name: 'Oleg'},
    {id:2, name: 'Alexander'},
    {id:3, name: 'Nastya'},
    {id:4, name: 'Gleborg'},
    {id:5, name: 'Adolfina'}
];

let messagesData = [
    {message: 'Message 1'},
    {message: 'Message 2'},
    {message: 'Message 3'},
    {message: 'Message 4'},
    {message: 'Message 5'}
];

let postsData = [
    {id: 1, message: 'Hello, how are you?'},
    {id: 2, message: 'Its my first post!'},
    {id: 3, message: 'Its my next post!'},
    {id: 4, message: 'Its my next post!'},
    {id: 5, message: 'Its my next post!'},
    {id: 6, message: 'Its my next post!'},
];

ReactDOM.render(<App dialogs={dialogsData}
                     messages={messagesData}
                     posts={postsData}
                />, document.querySelector('#root'));


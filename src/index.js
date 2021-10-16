import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from 'react-dom';
import App from "./components/App/app";
import state from './components/redux/state';
import './index.module.css';


ReactDOM.render(<App state={state} />, document.querySelector('#root'));


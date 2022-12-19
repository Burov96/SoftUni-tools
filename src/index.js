import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Apple, Clock} from './New folder/App';
import { PopUps } from './New folder/popUps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clock />
    <Apple />
    {/* <PopUps /> */}
  </React.StrictMode>
);
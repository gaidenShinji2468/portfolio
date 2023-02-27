import React from 'react';
import ReactDOM from 'react-dom/client';
import Space from './Space';
import './assets/styles/main.css';
import "bootswatch/dist/cyborg/bootstrap.min.css";
import starsProps from "./utils/starsProps";

starsProps(400, 50, 100);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Space/>
    </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    BrowserRouter,
    Routes,
    Route, 
} from "react-router-dom";

import HomePage from './Components/HomePage';
import Login from './Components/Login';
import Register from './Components/Register';
import App from './Components/App';
import Ticket from './Components/Ticket';
import AddTicket from './Components/AddTicket';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<App/>} >
                <Route
                    index
                    element={<HomePage/>} />
                    <Route path="/HomePage" element={<HomePage />} />
                    <Route path="/Ticket" element={<Ticket />} />
                    <Route path="/AddTicket" element={<AddTicket />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>);

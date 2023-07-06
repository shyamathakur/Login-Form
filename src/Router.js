import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loging from './Form/Loging';
import Dashboard from './Dashboard/Dashboard';

function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Loging />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default Router

// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/suspects">Suspects</Link></li>
                <li><Link to="/cases">Cases</Link></li>
                <li><Link to="/analytics">Analytics</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;

// src/components/Header.js
import React from 'react';

function Header() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <h1>CRIMS</h1>
                    <span>Crime Records & Intelligence</span>
                </div>
                <div className="user">
                    <span>Welcome, Inspector Adebayo</span>
                    <button>Logout</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;

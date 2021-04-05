import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/home">Homee</a>
                <a href="/order">Orderr</a>
                <a href="/admin">Adminn</a> 
                <a href="/review">Revieww</a>
                <a href="/login">Loginn</a>
            </nav>
            <h1> This is Headerrr</h1>
        </div>
    );
};

export default Header;
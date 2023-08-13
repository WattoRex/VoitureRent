import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar">
            <a href="#" className="logo">TwingoVibe Rent</a>
            <div className="nav-links">
                <span className="item selected">Accueil</span>
                <span id="scroll" className="item">Get Started</span>
            </div>
            <div className="nav-buttons" id="navMenu">
                <button className="nav-btn">SIGN IN</button>
            </div>

            <button className="toggler">
                <i className='bx bx-menu'></i>
            </button>
        </div>
    );
};

export default NavBar;

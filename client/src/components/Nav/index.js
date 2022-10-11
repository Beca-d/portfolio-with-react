import React from 'react';
import logo from '../../assets/logo.svg';

function Nav() {
    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera"><img src={logo} className="App-logo" alt="logo" width="175px" height="75px"/></span> Rebeca Smith
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                        About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav; 
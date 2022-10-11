import React from 'react';
import logo from '../../assets/logo.svg';

function Nav() {
    const categories = [
        { name: "Portfolio", description:"Portfolio of my work" },
        { name: "Contact", description: "Contact information" },
        { name: "Resume", description: "Resume of qualifications" },
    ];
    function categorySelected(name) {
        console.log(`${name} clicked`)
      }
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
                    {categories.map((category) => (
                        <li
                            className="mx-1"
                            key={category.name}
                        >
                            <span onClick={categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav; 
import React from "react";
import logo from '../../assets/logo.svg';

function Nav(props) {
    const {
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
    } = props
    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img">
                        <img src={logo} className="App-logo" alt="logo" width="175px" height="75px"/>
                    </span> 
                    Rebeca Smith
                </a>
            </h2>
            <nav className="nav">
                <ul className="flex-row" >
                    <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                            <span onClick={() => {setAboutSelected(true);setPortfolioSelected(false)}} >
                            About me </span>
                    </li>
                    <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                        <span onClick={() => {setPortfolioSelected(true); setAboutSelected(false)}} >
                            Portfolio</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default Nav;

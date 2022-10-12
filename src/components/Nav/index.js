import React from "react";
import logo from '../../assets/logo.svg';

function Nav(props) {
    const {
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        contactSelected,
        setContactSelected,
        resumeSelected,
        setResumeSelected,
    } = props
    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img">
                        <img src={logo} className="App-logo" alt="logo" width="350px" height="175px"/>
                    </span> 
                </a>
            </h2>
            <nav className="nav">
                <ul className="flex-row" >
                    <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                            <span onClick={() => {setAboutSelected(true);setPortfolioSelected(false); setContactSelected(false); setResumeSelected(false)}} >
                            About me </span>
                    </li>
                    <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                        <span onClick={() => {setPortfolioSelected(true); setAboutSelected(false); setContactSelected(false); setResumeSelected(false)}} >
                            Portfolio</span>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => {setContactSelected(true); setAboutSelected(false); setPortfolioSelected(false); setResumeSelected(false)}} >
                            Contact</span>
                    </li>
                    <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                        <span onClick={() => {setResumeSelected(true); setAboutSelected(false); setPortfolioSelected(false); setContactSelected(false)}} >
                            Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default Nav;

import React, { useState } from 'react';
// import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
// import Contact from './components/Contact';
// import Resume from './components/Resume';

function App() {

  const [aboutSelected,setAboutSelected] = useState(true)
  const [portfolioSelected,setPortfolioSelected] = useState(false)

  return (
    <div>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      >
      </Nav>
      <main>
        {aboutSelected ? (
          <About></About>
        ):(
          <>
          </>
        )}
        {portfolioSelected ? (
        <Portfolio></Portfolio>
        ):(
          <>
          </>
        )}
      </main>
    </div>
  );
}

export default App;

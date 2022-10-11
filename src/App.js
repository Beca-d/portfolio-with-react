import React, { useState } from 'react';
// import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
// import Resume from './components/Resume';

function App() {

  const [aboutSelected,setAboutSelected] = useState(true)
  const [portfolioSelected,setPortfolioSelected] = useState(false)
  const [contactSelected,setContactSelected] = useState(false)

  return (
    <div>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
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
        {contactSelected ? (
          <ContactForm></ContactForm>
        ):(
          <>
          </>
        )}
      </main>
    </div>
  );
}

export default App;

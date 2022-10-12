import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import './App.css';

function App() {

  const [aboutSelected,setAboutSelected] = useState(true)
  const [portfolioSelected,setPortfolioSelected] = useState(false)
  const [contactSelected,setContactSelected] = useState(false)
  const [resumeSelected,setResumeSelected] = useState(false)

  return (
    <div>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
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
        {resumeSelected ? (
          <Resume></Resume>
        ):(
          <>
          </>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

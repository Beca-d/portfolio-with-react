import React, {useState} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

// import './App.css';

function App() {

  const [aboutSelected,setAboutSelected] = useState(true)
  const [portfolioSelected,setPortfolioSelected] = useState(false)
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected,setResumeSelected] = useState(false)

  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Resume></Resume>
      </main>
    </div>
  );
}

export default App;

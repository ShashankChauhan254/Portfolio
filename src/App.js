import { useEffect } from 'react';
import Navbar from './Components/NavBar/navbar.js';
import Intro from './Components/Intro/intro.js';
import About from './Components/About/about.js'
import Skills from './Components/Skills/skills.js';
import Education from './Components/Education/education.js';
import Experience from './Components/Experience/experience.js';
import Projects from './Components/Projects/projects.js';
import Paper from './Components/ResearchPaper/paper.js';
import Positions from './Components/Positions/positions.js';
import Contact from './Components/Contact/contact.js';
import Footer from './Components/Footer/foooter.js';

function App() {
  useEffect(() => {
    document.title = "Shashank Chauhan | Portfolio";
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Education/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Paper/>
      <Positions/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

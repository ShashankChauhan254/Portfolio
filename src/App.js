import Navbar from './Components/NavBar/navbar.js';
import Intro from './Components/Intro/intro.js';
import About from './Components/About/about.js'
import Skills from './Components/Skills/skills.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;

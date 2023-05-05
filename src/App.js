import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import Certifications from './components/Certifications';
import WorkExp from './components/WorkExp';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes basename="personal-portfolio-react">
              <Route exact path='/' element={<Home />} />
              <Route exact path='/personal-portfolio-react' element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/projects' element={<Projects />} />
              <Route exact path='/contact' element={<Contact />} />
              <Route exact path='/certifications' element={<Certifications />} />
              <Route exact path='/workExp' element={<WorkExp />} />
        </Routes>
    </div>
  );
}

export default App;

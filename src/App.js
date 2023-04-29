import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/projects' element={<Projects />} />
              <Route exact path='/contact' element={<Contact />} />
              <Route exact path='/certifications' element={<Certifications />} />
        </Routes>
    </div>
  );
}

export default App;

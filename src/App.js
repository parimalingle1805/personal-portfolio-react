import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import WorkExp from './components/WorkExp';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import TerminalPrompt from './components/TerminalPrompt';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSectionId = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  }, []);

  // Handle URL changes from HashRouter (backward compatibility with external bookmarks)
  useEffect(() => {
    const path = location.pathname.replace(/^\/personal-portfolio-react/, '').replace(/^\//, '').toLowerCase();
    const routeMap = {
      '': 'home',
      'home': 'home',
      'about': 'summary',
      'summary': 'summary',
      'workexp': 'experience',
      'experience': 'experience',
      'projects': 'projects',
      'certifications': 'certificates',
      'certificates': 'certificates',
      'contact': 'contact'
    };

    if (routeMap[path]) {
      // Small timeout to allow DOM mounting
      setTimeout(() => {
        scrollToSectionId(routeMap[path]);
      }, 100);
    }
  }, [location.pathname, scrollToSectionId]);

  // Observer to track which section is currently in viewport
  useEffect(() => {
    const sectionIds = ['home', 'summary', 'experience', 'projects', 'certificates', 'contact'];
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const headerOffset = 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop - headerOffset;
          if (scrollY >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Command handler from interactive CLI prompt
  const handleCommand = (rawCommand) => {
    const cmd = rawCommand.toLowerCase().replace('/', '').trim();

    if (cmd === 'resume') {
      window.open('/personal-portfolio-react/resume.pdf', '_blank');
      return true;
    }

    if (cmd === 'fastfetch') {
      scrollToSectionId('home');
      return true;
    }

    const commandMapping = {
      'home': 'home',
      'all': 'home',
      'summary': 'summary',
      'about': 'summary',
      'skills': 'summary',
      'education': 'summary',
      'experience': 'experience',
      'work': 'experience',
      'workexp': 'experience',
      'projects': 'projects',
      'project': 'projects',
      'certificates': 'certificates',
      'certificate': 'certificates',
      'certs': 'certificates',
      'certifications': 'certificates',
      'contact': 'contact',
      'mail': 'contact',
      'email': 'contact',
      'form': 'contact'
    };

    const targetSection = commandMapping[cmd];
    if (targetSection) {
      scrollToSectionId(targetSection);
      // Update hash without triggering reload
      navigate(`/${targetSection}`, { replace: true });
      return true;
    }

    return false;
  };

  const handleNavClick = (sectionId) => {
    scrollToSectionId(sectionId);
    navigate(`/${sectionId}`, { replace: true });
  };

  return (
    <div className="App" data-testid="app">
      <Header activeSection={activeSection} onNavigate={handleNavClick} />
      <main>
        <Home />
        <About />
        <WorkExp />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <TerminalPrompt onCommand={handleCommand} />
    </div>
  );
}

export default App;

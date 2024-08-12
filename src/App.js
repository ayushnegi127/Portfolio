// App.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';
import Navbar from "./components/NavBar/navbar.js";
import Intro from "./components/Intro/Intro.js";
import Projects from "./components/Project/Projects.js";
import Recommendations from "./components/Recommendations/recommendations.js";
import Contact from "./components/Contact/contact.js";
import Footer from "./components/Footer/footer.js";

import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.target) {
      scroller.scrollTo(location.state.target, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -150,
      });
    }
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <Element name="home">
        <Intro />
        
        
      </Element>
      <Element name="skills">
        {/* <Skills/><Skill/>Add your Skills component here */}
      </Element>
      <Element name="education">
        {/* Add your Education component here */}
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="recommendations">
        <Recommendations />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;

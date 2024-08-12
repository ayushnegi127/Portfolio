import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../../asset/Logo.svg';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isSkillPage = location.pathname === "/skillpage";
  const [activeItem, setActiveItem] = useState('home');
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    if (isSkillPage) {
      setActiveItem('skills');
    } else {
      setActiveItem('home');
    }
  }, [isSkillPage]);

  const handleSetActive = (item) => {
    setActiveItem(item);
    setHoveredItem(null); // Reset hovered item when an item is clicked
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className='logo' />
      <div className="desktopMenu">
        {isSkillPage ? (
          <>
            <RouterLink
              className={`desktopMenuListItem ${activeItem === 'home' && hoveredItem !== 'home' ? 'active' : ''}`}
              to="/"
              state={{ target: "home" }}
              onClick={() => handleSetActive('home')}
              onMouseEnter={() => handleMouseEnter('home')}
              onMouseLeave={handleMouseLeave}
            >
              Home
            </RouterLink>
            <RouterLink
              className={`desktopMenuListItem ${activeItem === 'skills' && hoveredItem !== 'skills' ? 'active' : ''}`}
              to="/"
              state={{ target: "skills" }}
              onClick={() => handleSetActive('skills')}
              onMouseEnter={() => handleMouseEnter('skills')}
              onMouseLeave={handleMouseLeave}
            >
              Skills
            </RouterLink>
            <RouterLink
              className={`desktopMenuListItem ${activeItem === 'education' && hoveredItem !== 'education' ? 'active' : ''}`}
              to="/"
              state={{ target: "education" }}
              onClick={() => handleSetActive('education')}
              onMouseEnter={() => handleMouseEnter('education')}
              onMouseLeave={handleMouseLeave}
            >
              Education
            </RouterLink>
            <RouterLink
              className={`desktopMenuListItem ${activeItem === 'projects' && hoveredItem !== 'projects' ? 'active' : ''}`}
              to="/"
              state={{ target: "projects" }}
              onClick={() => handleSetActive('projects')}
              onMouseEnter={() => handleMouseEnter('projects')}
              onMouseLeave={handleMouseLeave}
            >
              Projects
            </RouterLink>
            <RouterLink
              className={`desktopMenuListItem ${activeItem === 'recommendations' && hoveredItem !== 'recommendations' ? 'active' : ''}`}
              to="/"
              state={{ target: "recommendations" }}
              onClick={() => handleSetActive('recommendations')}
              onMouseEnter={() => handleMouseEnter('recommendations')}
              onMouseLeave={handleMouseLeave}
            >
              Recommendations
            </RouterLink>
            <RouterLink
              className={`desktopMenuListItem ${activeItem === 'contact' && hoveredItem !== 'contact' ? 'active' : ''}`}
              to="/"
              state={{ target: "contact" }}
              onClick={() => handleSetActive('contact')}
              onMouseEnter={() => handleMouseEnter('contact')}
              onMouseLeave={handleMouseLeave}
            >
              Contact
            </RouterLink>
          </>
        ) : (
          <>
            <ScrollLink
              className={`desktopMenuListItem ${activeItem === 'home' && hoveredItem !== 'home' ? 'active' : ''}`}
              to="home"
              offset={-150}
              onClick={() => handleSetActive('home')}
              onMouseEnter={() => handleMouseEnter('home')}
              onMouseLeave={handleMouseLeave}
            >
              Home
            </ScrollLink>
            <RouterLink
              className={`desktopMenuListItem ${activeItem === 'skills' && hoveredItem !== 'skills' ? 'active' : ''}`}
              to="/skillpage"
              onClick={() => handleSetActive('skills')}
              onMouseEnter={() => handleMouseEnter('skills')}
              onMouseLeave={handleMouseLeave}
            >
              Skills
            </RouterLink>
            <ScrollLink
              className={`desktopMenuListItem ${activeItem === 'education' && hoveredItem !== 'education' ? 'active' : ''}`}
              to="education"
              offset={-60}
              onClick={() => handleSetActive('education')}
              onMouseEnter={() => handleMouseEnter('education')}
              onMouseLeave={handleMouseLeave}
            >
              Education
            </ScrollLink>
            <ScrollLink
              className={`desktopMenuListItem ${activeItem === 'projects' && hoveredItem !== 'projects' ? 'active' : ''}`}
              to="projects"
              offset={-60}
              onClick={() => handleSetActive('projects')}
              onMouseEnter={() => handleMouseEnter('projects')}
              onMouseLeave={handleMouseLeave}
            >
              Projects
            </ScrollLink>
            <ScrollLink
              className={`desktopMenuListItem ${activeItem === 'recommendations' && hoveredItem !== 'recommendations' ? 'active' : ''}`}
              to="recommendations"
              offset={-160}
              onClick={() => handleSetActive('recommendations')}
              onMouseEnter={() => handleMouseEnter('recommendations')}
              onMouseLeave={handleMouseLeave}
            >
              Recommendations
            </ScrollLink>
            <ScrollLink
              className={`desktopMenuListItem ${activeItem === 'contact' && hoveredItem !== 'contact' ? 'active' : ''}`}
              to="contact"
              offset={10}
              onClick={() => handleSetActive('contact')}
              onMouseEnter={() => handleMouseEnter('contact')}
              onMouseLeave={handleMouseLeave}
            >
              Contact
            </ScrollLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

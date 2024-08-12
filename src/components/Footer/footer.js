// Footer.js
import React from 'react';
import "./footer.css";
import image1 from "../../asset/Frame.png";
import image2 from "../../asset/Frame1.png";
import image3 from "../../asset/Frame2.png";
import image4 from "../../asset/Frame3.png";
import image5 from "../../asset/Logo.svg";
import image6 from "../../asset/Copyright Circle.png";
import image7 from "../../asset/image7.svg";
import image8 from "../../asset/image8.svg";
import image9 from "../../asset/image9.svg";
import image10 from "../../asset/LinkedIn.svg";
import image11 from "../../asset/Instagram.svg";
import image12 from "../../asset/Facebook.svg";
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const isSkillPage = location.pathname === "/skillpage";

  return (
    <footer className="footer-container">
      <div className="footer-section logos">
        <img src={image1} alt="Logo 1" />
        <img src={image2} alt="Logo 2" />
        <img src={image3} alt="Logo 3" />
        <img src={image4} alt="Logo 4" />
      </div>
      <div className="footer-section glasses">
        <img src={image5} alt="Glasses" />
      </div>
      <div className="footer-section main-content">
        <div className="footer-item badges">
          <div className="badge">
            <img id='batch1' src={image7} alt="Badge 1" />
            <p>4.5/5 Rating On Lorem</p>
          </div>
          <div className="badge">
            <img src={image8} alt="Badge 2" />
            <p>9/10 Rating On Ipsum</p>
          </div>
          <div className="badge">
            <img src={image9} alt="Badge 3" />
            <p>4.5/5 Rating On Dorel</p>
          </div>
        </div>
        
        <div className="footer-item quick-links">
          <h4>Quick Links</h4>
          <ul>
            {isSkillPage ? (
              <>
                <li><RouterLink to="/" state={{ target: "home" }} offset={-150} smooth = {true}>Home</RouterLink></li>
                <li><RouterLink to="/" state={{ target: "skills" }}>Skills</RouterLink></li>
                <li><RouterLink to="/" state={{ target: "education" }} offset={-60}>Education</RouterLink></li>
                <li><RouterLink to="/" state={{ target: "projects" }} offset={-60}>Projects</RouterLink></li>
                <li><RouterLink to="/" state={{ target: "recommendations" }} offset={-160}>Recommendations</RouterLink></li>
                <li><RouterLink to="/" state={{ target: "contact" }} offset={10}>Contact</RouterLink></li>
              </>
            ) : (
              <>
                <li><ScrollLink to="home" offset={-150}>Home</ScrollLink></li>
                <li><ScrollLink to="skills" offset={-60}>Skills</ScrollLink></li>
                <li><ScrollLink to="education" offset={-60}>Education</ScrollLink></li>
                <li><ScrollLink to="projects" offset={-60}>Projects</ScrollLink></li>
                <li><ScrollLink to="recommendations" offset={-160}>Recommendations</ScrollLink></li>
                <li><ScrollLink to="contact" offset={10}>Contact</ScrollLink></li>
              </>
            )}
          </ul>
        </div>
        <div className="footer-item portfolio">
          <h4>Portfolio</h4>
          <ul className="portfolio-list">
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Website Design</li>
            <li>Machine Learning</li>
            <li>Problem Solving & DSA</li>
          </ul>
        </div>
        <div className="footer-item connect">
          <h4>Connect</h4>
          <ul className="social-links">
            <li><a href="https://www.linkedin.com"><img src={image10} alt="LinkedIn" /></a></li>
            <li><a href="https://www.instagram.com"><img src={image11} alt="Instagram" /></a></li>
            <li><a href="https://www.facebook.com"><img src={image12} alt="Facebook" /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p><img src={image6} alt="Copyright" /> &nbsp; 2024 Copyright, All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

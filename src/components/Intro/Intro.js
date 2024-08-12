import React from "react";
import "./Intro.css";
import heroImage from "../../asset/hero.png";
import circleOrange from "../../asset/circle.svg";
import circleGreen from "../../asset/circleGreen.svg";
import rectangleIcon from "../../asset/rectangle.svg";
import rectangleIconblue from "../../asset/Rectangle 52.svg";
import triangleIcon from "../../asset/triangle.svg";
import hirearrow from "../../asset/Vector.svg"
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <header id="intro" className="header">
      <div className="container">
        <div className="content">
          <h1>
            I'm Rayan Adlrdard <br />
            <span className="highlight">Front-end Developer</span>
          </h1>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Et,
            Volutpat Feugiat Placerat Lobortis. Natoque Rutrum Semper Sed
            Suspendisse Nunc Lectus.
          </p>
          <Link to='contact'><button className="hire-me-btn">HIRE ME &nbsp; <img id="hirearrow" src={hirearrow} alt="" /></button></Link>
        </div>
        <div className="image-container">
          <img src={heroImage} alt="Developer illustration" />
        </div>
      </div>
      <img src={circleOrange} alt="Circle Icon" className="iconH circle1" />
      <img src={circleOrange} alt="Circle Icon" className="iconH circle4" />
      <img src={circleGreen} alt="Circle Icon" className="iconH circle2" />
      <img src={circleGreen} alt="Circle Icon" className="iconH circle3" />
      <img
        src={rectangleIconblue}
        alt="Rectangle Icon"
        className="iconH rectangle1"
      />
      <img
        src={rectangleIcon}
        alt="Rectangle Icon"
        className="iconH rectangle2"
      />
      <img src={triangleIcon} alt="Triangle Icon" className="iconH triangle" />
    </header>
  );
};

export default Intro;

// src/components/SkillBar.js
import React, { useEffect, useRef } from "react";
import "./SkillBar.css";

const SkillBar = ({ name, level }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    const progressBar = progressRef.current;
    progressBar.style.setProperty('--progress-level', `${level}%`);
    progressBar.classList.add("filled");
  }, [level]);

  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-progress">
        <div ref={progressRef} className="skill-progress-bar" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
};

export default SkillBar;
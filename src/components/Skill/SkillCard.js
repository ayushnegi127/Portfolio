// src/components/SkillCard.js
import React from "react";
import SkillBar from "./SkillBar";
import "./SkillCard.css";

const SkillCard = ({ category, skills }) => {
  return (
    <div className="skill-card">
      <h3 className="skill-card-title">{category}</h3>
      {skills.map((skill, index) => (
        <SkillBar key={index} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

export default SkillCard;
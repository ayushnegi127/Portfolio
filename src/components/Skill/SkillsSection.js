import React, { useState, useEffect } from 'react';
import SkillCard from './SkillCard';
import Modal from '../Skill/Modal/Modal.js';
import './SkillsSection.css';

const SkillsSection = () => {
  const [skillsData, setSkillsData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetching data from the JSON-server
    fetch('http://localhost:5000/skills')
      .then(response => response.json())
      .then(data => setSkillsData(data))
      .catch(error => console.error('Error fetching skills data:', error));
  }, []);

  const handleAddSkill = (newSkillData) => {
    const updatedSkills = [...skillsData];
    updatedSkills.push({
      category: newSkillData.domain,
      skills: newSkillData.skills,
    });
    setSkillsData(updatedSkills);

    // Optionally post new skill data to JSON-server
    fetch('http://localhost:5000/skills', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: newSkillData.domain,
        skills: newSkillData.skills,
      }),
    })
    .catch(error => console.error('Error adding new skill:', error));
  };

  return (
    <div className="skills-section">
      <h2 className="section-title">Skills & Languages</h2>
      <p className="section-description">
        Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor<br />
        Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit.<br />
        Lorem Ipsum
      </p>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <SkillCard
            key={index}
            category={category.category}
            skills={category.skills}
          />
        ))}
      </div>
      <button className="add-skill-button" onClick={() => setIsModalOpen(true)}>
        ADD SKILL
      </button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddSkill={handleAddSkill}
      />
    </div>
  );
};

export default SkillsSection;

import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onAddSkill }) => {
  const [domain, setDomain] = useState('');
  const [skills, setSkills] = useState(Array(5).fill(''));
  const [proficiencies, setProficiencies] = useState(Array(5).fill(''));

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const handleProficiencyChange = (index, value) => {
    const newProficiencies = [...proficiencies];
    newProficiencies[index] = value;
    setProficiencies(newProficiencies);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!domain.trim()) {
      alert('Domain is required.');
      return;
    }

    const newSkills = skills
      .map((skill, index) => (skill && proficiencies[index] ? { name: skill, level: proficiencies[index] } : null))
      .filter(skill => skill);

    if (newSkills.length === 0) {
      alert('Please add at least one skill.');
      return;
    }

    onAddSkill({ domain, skills: newSkills });
    setSkills(Array(5).fill(''));
    setProficiencies(Array(5).fill(''));
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Skill</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Domain
            <input
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder='Front End Developer'
              required
            />
          </label>
          <div className="skills-container">
            <label id='skill-label'>Skills</label>
            <div className="skill-labels">
              <label id='skill-label-small'>Skill</label>
              <label id='proficiency'>Proficiency <span id='percentage'>(%)</span></label>
            </div>
            {skills.map((skill, index) => (
              <div className="skill-row" key={index}>
                <input
                  type="text"
                  className="skill-input"
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                />
                <input
                  type="number"
                  className="proficiency-input"
                  value={proficiencies[index]}
                  onChange={(e) => handleProficiencyChange(index, e.target.value)}
                  min="0"
                  max="100"
                />
              </div>
            ))}
          </div>
          <div className="button-group">
            <button type="submit">ADD SKILL</button>
            <button type="button" onClick={onClose}>CANCEL</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

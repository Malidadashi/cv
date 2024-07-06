import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import './skillsboxitems.css'

function SkillsBoxItems({ title, leftTexts, rightTexts }) {
  return (
    <div className="skill">
      <div className="skill-box">
        <h2>{title}</h2>
        <div className="skill-box-content">
          <div className="left">
            {leftTexts.map((text, index) => (
              <div key={index} className="text-item">
                <IoMdCheckmarkCircleOutline /> {text}
              </div>
            ))}
          </div>
          <div className="right">
            {rightTexts.map((text, index) => (
              <div key={index} className="text-item">
                <IoMdCheckmarkCircleOutline /> {text}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default SkillsBoxItems;

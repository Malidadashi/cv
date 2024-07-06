import React from 'react';
import SkillsBoxItems from '../../Items/SkillsBox/SkillsBoxItems';
import './skillsboxescontainer.css'

function SkillsBoxesContainer() {
  return (
    <div>
      <div className='skill-title'>
        <h1>Skills</h1>
        <h3>My technical level</h3>
      </div>
      <div className="skill-container ">

        <SkillsBoxItems
          title="Box 1"
          leftTexts={["Left 1.1", "Left 1.2", "Left 1.3", "Left 1.4"]}
          rightTexts={["Right 1.1", "Right 1.2", "Right 1.3", "Right 1.4"]}
        />
        <SkillsBoxItems
          title="Box 2"
          leftTexts={["Left 2.1", "Left 2.2", "Left 2.3", "Left 2.4"]}
          rightTexts={["Right 2.1", "Right 2.2", "Right 2.3", "Right 2.4"]}
        />
      </div>

    </div>
  );
}

export default SkillsBoxesContainer;

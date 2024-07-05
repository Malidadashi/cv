// src/components/IconBoxesContainer.js
import React from 'react';
import IconBox from '../../Items/IconBox/IconBox';
import './iconboxescontainer.css';

const IconBoxesContainer = () => {
  return (
    <div className="icon-boxes-container">
      <IconBox 
        icon="🌟" 
        title="Title 1" 
        text="This is the text for the first box." 
      />
      <IconBox 
        icon="🚀" 
        title="Title 2" 
        text="This is the text for the second box." 
      />
      <IconBox 
        icon="🎉" 
        title="Title 3" 
        text="This is the text for the third box." 
      />
    </div>
  );
};

export default IconBoxesContainer;

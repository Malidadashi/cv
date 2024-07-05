import React from 'react';
import './iconbox.css';

const IconBox = ({ icon, title, text }) => {
    return (
        <div className="icon-box">
            <div className="icon">{icon}</div>
            <h3 className="title">{title}</h3>
            <p className="text">{text}</p>
        </div>
    );
};

export default IconBox;

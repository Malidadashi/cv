import React from "react";
import skillsboxitems from "./skillsboxitems.css";

const SkillsBoxItems = () => {
  const [itemsData] = React.useState([
    {
      title: "Title 1",
      texts: ["Text 1", "Text 2", "Text 3", "Text 4"],
      texts: ["Text 5", "Text 6", "Text 7", "Text 8"],

    },
    // {
    //   texts: ["Text 1", "Text 2", "Text 3", "Text 4"],
    // },
  ]);

  return (
    <div className="items">
      {itemsData.map((item, index) => (
        <div className="box" key={index}>
          <h3 className="title">{item.title}</h3>
          <ul className="text-list">
            {item.texts.map((text, idx) => (
              <li key={idx}>
                <span className="tick-icon">✔</span> {text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillsBoxItems;

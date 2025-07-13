// DropdownSection.js
import React, { useState } from "react";

const DropdownSection = ({ title, categories }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="dropdown-section">
      <h2>{title}</h2>
      {Object.keys(categories).map((category) => (
        <div key={category} className="category-block">
          <button onClick={() => toggleCategory(category)} className="category-btn">
            {category}
          </button>
          {openCategory === category && (
            <div className="recipe-grid">
              {categories[category].map((item, index) => (
                <a key={index} href={item.link} className="recipe-card">
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownSection;

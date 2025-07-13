// SidebarFilter.js
import React, { useState } from "react";
import "./css/SidebarFilter.css";
import FilterDatas from '../Components/FilterDatas'

const SidebarFilter = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="sidebar">
      {Object.keys(FilterDatas).map((section) => (
        <div key={section} className="filter-block">
          <button
            className={`filter-header ${openSection === section ? "open" : ""}`}
            onClick={() => toggleSection(section)}
          >
            <span>{section}</span>
            <span className="arrow">{openSection === section ? "▾" : "▸"}</span>
          </button>
          {openSection === section && (
            <ul className="filter-items">
              {FilterDatas[section].map((item, idx) => (
                <li key={idx}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarFilter;

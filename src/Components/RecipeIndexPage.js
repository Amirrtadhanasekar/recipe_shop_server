import React, { useState } from "react";
import "./css/SidebarFilter.css";
import "./css/RecipeIndexPage.css";
import FilterDatas from './FilterDatas';
import chefimg from '../Assests/chefimg.jpg' 

const RecipeIndexPage = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    
  <div className="container">
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

    
    <main className="content">
      <section className="about">
        <h2>About Our Webpage</h2>
        <div className="about-content vertical">
          <p>
            Our website is a treasure trove for passionate bakers. We aim to bring you clear, tested, and beautifully presented recipes that you can trust.
          </p>

          <p>
            Whether you're a beginner or a seasoned pro, our content is designed to guide and inspire you every step of the way. We believe baking should be joyful and accessible to everyone.
          </p>

          <img src={chefimg} alt="Baking" className="about-img" />

          <p>
            From fluffy cakes to crunchy cookies, explore our handpicked categories and discover baking like never before. Start your baking journey with confidence!
          </p>
        </div>
      </section>
    </main>
  </div>
);

};

export default RecipeIndexPage;

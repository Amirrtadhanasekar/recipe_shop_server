import React from "react";
import './css/AboutUs.css';
import cake from '../Assests/cake.jpg';
import bowl from '../Assests/bowl.jpg';
import party from '../Assests/party.jpg';
import sale from '../Assests/sale.jpg';

const categories = [
  "Whole Grain", "Side Dishes", "Main Course", "Drinks", "Breakfast"
];
const ingredients = [
  "WFPB", "Sandwiches", "Instant Pot", "Dinner Ideas", "Baking"
];
const moreCategories = [
  "Vegetarian Recipes", "Vegan Recipes", "Salads", "Holiday", "Desserts", "Appetizers",
  "Soup Recipes", "Pasta Recipes", "High Protein", "Cookies", "Camping Recipes", "Quick",
  "Gluten Free", "Chocolate"
];

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="menu-grid">
        <div className="menu-column">
          <h3>CATEGORIES</h3>
          {categories.map((item, index) => (
            <a href="#" key={index} className="menu-link">{item}</a>
          ))}
        </div>
        <div className="menu-column">
          <h3>INGREDIENTS</h3>
          {ingredients.map((item, index) => (
            <a href="#" key={index} className="menu-link">{item}</a>
          ))}
        </div>
        <div className="menu-multiline">
          {moreCategories.map((item, index) => (
            <a href="#" key={index} className="menu-link">{item}</a>
          ))}
        </div>
      </div>
<div className="recipe-info">
      <div className="about-container">

        <div className="about-text-block">
          <h2>Welcome!</h2>
          <p>
          This site celebrates cooking, and aspires to help you integrate the power of lots of vegetables and whole foods into your everyday meals. The recipes you'll find here are vegetarian, often vegan, written with the home cook in mind.
          </p>
          
        </div>
      </div>
      <div className="celebration-section">
  <h2 className="celebration-heading">🎉 CELEBRATION BAKES</h2>
  <p className="celebration-subtext">
    Life is worth celebrating, so why not whip up a special treat from scratch. From birthdays to anniversaries, and everything in between, here are our favourite celebration bakes.
  </p>
  <div className="celebration-grid">
    <div className="celebration-item">
      <img src={cake} alt="Birthday Cake" />
      <p>birthday cakes</p>
    </div>
    <div className="celebration-item">
      <img src={bowl} alt="Party Food" />
      <p>baking</p>
    </div>
    <div className="celebration-item">
      <img src={party} alt="Baking " />
      <p> party food</p>
    </div>
    <div className="celebration-item">
      <img src={sale} alt="Bake Sale" />
      <p>bake sale</p>
    </div>
  </div>
</div>

      </div>

    </section>
  );
};

export default AboutUs;

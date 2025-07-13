// RecipeDetailsComponents/AuthorSection.js
import React from 'react';
import './css/RecipeDetails.css';

const AuthorSection = ({ creator }) => {
  if (!creator) return null;

  return (
    <div className="author-section">
      <h2>About Author: {creator.name}</h2>
      <div className="author-details">
        <img src={creator.image} alt={creator.name} className="author-image" />
        <p className="author-about">{creator.about}</p>
      </div>
    </div>
  );
};

export default AuthorSection;

// RecipeDetailsComponents/InstructionsSection.js
import React from 'react';
import './css/RecipeDetails.css';

const InstructionsSection = ({ instructions }) => {
  return (
    <>
      <h2>Instructions</h2>
      <p>{instructions.join(' ')}</p>
    </>
  );
};

export default InstructionsSection;

import React from 'react';
import { useParams } from 'react-router-dom';
import './css/RecipeDetails.css';

import whiteDevil from '../Assests/item1.jpg';
import oreoCupcake from '../Assests/item2.jpg';
import glazedCupcake from '../Assests/item3.jpg';
import glazedDonut from '../Assests/item4.jpg';
import chocoPopsicle from '../Assests/item5.jpg';
import VanillaDream from '../Assests/item6.jpg';
import BerryBlast from '../Assests/item7.jpg';
import CaramelSwirl from '../Assests/item8.jpg';


import Authors from './Authors';
import AuthorSection from './AuthorSection';
import InstructionsSection from './InstructionsSection';


const recipes = {
  'White Devil': {
    image: whiteDevil,
    creator: Authors.chef1,
    ingredients: ['2 cups flour', '1 cup sugar', '1/2 cup cocoa', '1 tsp vanilla', '2 eggs'],
    instructions: [
      'Preheat oven to 350°F (175°C).',
      'Mix dry ingredients in a bowl.',
      'Add wet ingredients and blend well.',
      'Pour into a greased pan.',
      'Bake for 30 minutes.',
    ],
  },
  'Oreo Cupcake': {
    image: oreoCupcake,
    creator: Authors.chef2,
    ingredients: ['1 cup flour', '1/2 cup sugar', 'Crushed Oreos', '1/2 cup milk', '1 egg'],
    instructions: [
      'Preheat oven to 375°F (190°C).',
      'Mix all ingredients gently.',
      'Place into cupcake liners.',
      'Bake for 20–25 minutes.',
    ],
  },
  'Glazed Cupcake': {
    image: glazedCupcake,
    creator: Authors.chef3,
    ingredients: ['1 cup flour', '1/4 cup butter', 'Glaze (sugar & milk)', '1 tsp baking soda', '1 egg'],
    instructions: [
      'Mix ingredients.',
      'Bake at 350°F for 25 minutes.',
      'Cool and dip in glaze.',
    ],
  },
  'Glazed Donut': {
    image: glazedDonut,
    creator: Authors.chef4,
    ingredients: ['2 cups flour', '1 tbsp yeast', '1 cup milk', '1 egg', 'Sugar glaze'],
    instructions: [
      'Make dough and let rise for 1 hour.',
      'Shape donuts and fry in oil.',
      'Dip in glaze and serve warm.',
    ],
  },
  'Choco Mixed Popsicle': {
    image: chocoPopsicle,
    creator: Authors.chef5,
    ingredients: ['Melted chocolate', 'Chopped fruits', 'Milk', 'Honey'],
    instructions: [
      'Mix chocolate, milk, and honey.',
      'Add chopped fruits.',
      'Pour into molds and freeze for 4 hours.',
    ],
  },
  'Vanilla Dream': {
    image: VanillaDream,
    creator: Authors.chef6,
    ingredients: ['Melted chocolate', 'Chopped fruits', 'Milk', 'Honey'],
    instructions: [
      'Mix chocolate, milk, and honey.',
      'Add chopped fruits.',
      'Pour into molds and freeze for 4 hours.',
    ],
  },
  'Berry Blast': {
    image: BerryBlast,
    creator: Authors.chef7,
    ingredients: ['Melted chocolate', 'Chopped fruits', 'Milk', 'Honey'],
    instructions: [
      'Mix chocolate, milk, and honey.',
      'Add chopped fruits.',
      'Pour into molds and freeze for 4 hours.',
    ],
  },
  'Caramel Swirl': {
    image: CaramelSwirl,
    creator: Authors.chef1,
    ingredients: ['Melted chocolate', 'Chopped fruits', 'Milk', 'Honey'],
    instructions: [
      'Mix chocolate, milk, and honey.',
      'Add chopped fruits.',
      'Pour into molds and freeze for 4 hours.',
    ],
  },
  

};

const RecipeDetails = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  const recipe = recipes[decodedName];

  if (!recipe) {
    return <p style={{ padding: '2rem', textAlign: 'center' }}>Recipe not found.</p>;
  }

  return (
    <div className="recipe-details">
      <h1 className="recipe-title">{decodedName}</h1>
      <div className="recipe-content">
        <img src={recipe.image} alt={decodedName} className="recipe-image" />
        <div className="recipe-info" style={{ maxWidth: '1000px' }}>
          <AuthorSection creator={recipe.creator} />
          <h2>Ingredients</h2>
          <p>{recipe.ingredients.join(', ')}</p>
          <InstructionsSection instructions={recipe.instructions} />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;

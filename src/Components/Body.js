import React, { useState } from 'react';
import './css/Body.css';
import { useNavigate } from 'react-router-dom';
import download from '../Assests/download.jpg';
import item1 from '../Assests/item1.jpg';
import item2 from '../Assests/item2.jpg';
import item3 from '../Assests/item3.jpg';
import item4 from '../Assests/item4.jpg';
import item5 from '../Assests/item5.jpg';
import item6 from '../Assests/item6.jpg';
import item7 from '../Assests/item7.jpg';
import item8 from '../Assests/item8.jpg';
import item9 from '../Assests/item9.jpg';
import item10 from '../Assests/item10.jpg';
import bakery from '../Assests/bakery.jpg'; 

const Body = () => {
  const [like, setLike] = useState(0);
  const [text, setText] = useState("Hii Welcome To LULU");
  const [input, setInput] = useState('');
  const [db, setDb] = useState([]);
  const navigate = useNavigate();

  const handleLike = () => setLike(like + 1);
  const handleDislike = () => like > 0 && setLike(like - 1);
  const handleText = () => setText("Bye! Thanks for visiting.");
  const handleStore = () => {
    if (input.trim()) {
      setDb([...db, input]);
      setInput('');
    }
  };

  // Recipe names for both sets
  const firstSetNames = ['White Devil', 'Oreo Cupcake', 'Glazed Cupcake', 'Glazed Donut', 'Choco Mixed Popsicle'];
  const secondSetNames = ['Vanilla Dream', 'Berry Blast', 'Caramel Swirl', 'Lemon Zest', 'Minty Fresh'];

  // Handler to navigate to recipe detail page
  const handleReadNow = (recipeName) => {
    // encodeURI to safely handle spaces/special chars in URL
    navigate(`/recipe/${encodeURIComponent(recipeName)}`);
  };

  return (
    <div className='body'>
      <div className='body-container'>
        <div className='image-section'>
          <img src={download} alt="Cafe" />
        </div>

        <div className='text-section'>
          <h1>About Us💡</h1>
          <p>
            Welcome to <strong>LULU Pastry Shop.</strong>
            Enjoy our freshly made pastries, cakes, and coffee.
          </p>

          <div className='like-section'>
            <span>👍 {like}</span>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleDislike}>Dislike</button>
          </div>
        </div>
      </div>

      <div className='menu-section'>
        <h2>🍰 Our Recipes</h2>
        <div className='menu-items'>
          {[item1, item2, item3, item4, item5].map((item, index) => (
            <div className='menu-card' key={index}>
              <img src={item} alt={`Menu item ${index + 1}`} />
              <p>{firstSetNames[index]}</p>
              <button onClick={() => handleReadNow(firstSetNames[index])}>Read Now</button>
            </div>
          ))}
        </div>
      </div>

      <div className='menu-section'>
        <div className='menu-items'>
          {[item6, item7, item8, item9, item10].map((item, index) => (
            <div className='menu-card' key={index}>
              <img src={item} alt={`Menu item ${index + 6}`} />
              <p>{secondSetNames[index]}</p>
              <button onClick={() => handleReadNow(secondSetNames[index])}>Read Now</button>
            </div>
          ))}
        </div>
      </div>

      <div className='content'>
        <div className='inputBox'>
          <input
            type="text"
            placeholder="Search for desserts..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleStore}>Search</button>
        </div>
        <ol className='clr'>
          {db.map((data, index) => (
            <li key={index} className='clr'>{data}</li>
          ))}
        </ol>
      </div>

      <div className="intro-container">
        <h1 className="main-title">Food of The Gods, Freshly Baked!</h1>
        <p className="subtitle">
          Since 2004, we've been serving our guests the best quality treats, <br />
          traditionally made and presented with care.
        </p>
        <div className="center-image">
          <img src={bakery} alt="Bakery Storefront" />
        </div>
      </div>

      <div className='welcome-section'>
        <p className='welcome-text'>{text}🌟</p>
        <button onClick={handleText}>Click</button>
      </div>
    </div>
  );
};

export default Body;

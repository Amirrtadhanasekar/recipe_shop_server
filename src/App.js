import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Body from './Components/Body';
import FormPage from './Components/FormPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Aboutus from './Components/Aboutus';
import Blog from './Components/pages/Blog';
import RecipeDetails from './Components/RecipeDetails'; 
import SidebarFilter from './Components/SidebarFilter';
import RecipeIndexPage from './Components/RecipeIndexPage';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/login" element={<Login />} />

        {/* Render Body + Footer only on /home */}
        <Route
          path="/home"
          element={
            <>
              
              <Body/>
              <Footer />
            </>
          }
        />

        {/* Recipe detail page */}
        <Route path="/recipe/:name" element={<RecipeDetails />} />

        {/* Placeholder components for other routes */}
        <Route
          path="/about"
          element={
            <>
              <Aboutus/>
            </>
          }
        />
        <Route
          path="/blog"
          element={
            <>
              <Blog />
            </>
          }
        />
        <Route
          path="/filter"
          element={
            <>
              <RecipeIndexPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

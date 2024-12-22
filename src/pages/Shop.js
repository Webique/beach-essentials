// src/pages/Shop.js
import React from 'react';
import './Shop.css'; // Optional: Create a separate CSS file for Shop-specific styles

const Shop = () => {
  const handleCategoryClick = (category) => {
    alert(`You selected: ${category}`);
    // Add logic to display items for the selected category here
  };

  return (
    <div className="page">
      <h1>Shop</h1>
      <p>Browse our exclusive collection of beach essentials!</p>

      {/* Category Buttons */}
      <div className="shop-buttons">
        <button onClick={() => handleCategoryClick('All')}>All</button>
        <button onClick={() => handleCategoryClick('Towels')}>Towels</button>
        <button onClick={() => handleCategoryClick('Hats')}>Hats</button>
        <button onClick={() => handleCategoryClick('Beach Bags')}>Beach Bags</button>
        <button onClick={() => handleCategoryClick('Mini Pouch')}>Mini Pouch</button>
        <button onClick={() => handleCategoryClick('Custom')}>Custom</button>
      </div>
    </div>
  );
};

export default Shop;

import React, { useState } from 'react';
import './App.css';
import logo from './assets/logo.jpg';

const Navbar = ({ setPage }) => (
  <nav className="navbar">
    <div className="logo">
      <img src={logo} alt="Beach Essentials Logo" className="logo-img" />
    </div>
    <ul>
      <li><button onClick={() => setPage('Home')}>Home</button></li>
      <li><button onClick={() => setPage('Shop')}>Shop</button></li>
      <li><button onClick={() => setPage('About')}>About</button></li>
      <li><button onClick={() => setPage('Cart')}>Cart</button></li>
    </ul>
  </nav>
);

const Home = () => (
  <div className="page">
    <h1>Welcome to Beach Essentials</h1>
    <p>Your one-stop shop for all your beach essentials!</p>
  </div>
);

const Shop = () => {
  const handleCategoryClick = (category) => {
    alert(`You selected: ${category}`);
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


const About = () => (
  <div className="page">
    <h1>About Us</h1>
    <p>Learn more about our brand and mission to provide the best beachwear.</p>
  </div>
);

const Cart = () => (
  <div className="page">
    <h1>Cart</h1>
    <p>Your selected items will appear here.</p>
  </div>
);

const App = () => {
  const [page, setPage] = useState('Home'); // State to track the active page

  const renderPage = () => {
    switch (page) {
      case 'Shop':
        return <Shop />;
      case 'About':
        return <About />;
      case 'Cart':
        return <Cart />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar setPage={setPage} />
      {renderPage()}
    </>
  );
};

export default App;

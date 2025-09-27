import React from 'react';
import './fproducts.css';
import { useNavigate } from 'react-router-dom'; // ✅ import navigate

const products = [{
    name: "Premium Tiles",
    image: "tile1.jpg",
    description: "Stylish and durable tiles for every room."
  },
  {
    name: "Clear Glass",
    image: "glass1.jpg",
    description: "Top-quality glass for windows, shelves, and decor."
  },
  {
    name: "Strong Plywood",
    image: "ply1.jpg",
    description: "Reliable and long-lasting plywood for furniture."
  },
  {
    name: "Sanitary Ware",
    image: "door1.jpg",
    description: "Modern sanitary fittings for your dream bathroom."
  }];

function FeaturedProducts() {
  const navigate = useNavigate(); // ✅

  const handleViewMore = () => {
    navigate('/viewproducts'); // ✅ redirect
  };

  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={require(`./images/${product.image}`)} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <div className="view-more-container">
        <button className="view-more-button" onClick={handleViewMore}>
          View More Products
        </button>
      </div>
    </div>
  );
}

export default FeaturedProducts;

import React from 'react';
import './fproducts.css';
import { useNavigate } from 'react-router-dom'; // ✅ import navigate

const products = [
  {
    name: "WPC Doors",
    image: "wpc.jpg",
    description: "Durable, water-resistant doors perfect for all weather conditions."
  },
  {
    name: "Plywood",
    image: "plywood.jpg",
    description: "Strong, versatile plywood for furniture and interior projects."
  },
  {
    name: "Wooden Doors",
    image: "woodendoor.jpg",
    description: "Elegant solid-wood doors that bring natural warmth to your home."
  },
  
  {
    name: "Designer Mirrors",
    image: "glass.jpg",
    description: "Stylish mirrors that add depth and a touch of luxury to any space."
  }
];


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

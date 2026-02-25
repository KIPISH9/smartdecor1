import React from 'react';
import './ProductCard.css'; // Assuming you have a CSS file for styling the card

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: number;
  category: string;
  details: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, name, price, category, details }) => {
  const handleOrder = () => {
    const message = `Hey, I would like to order the following product:\n\nName: ${name}\nCategory: ${category}\nPrice: $${price}\nDetails: ${details}\nImage: ${imageUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-category">{category}</p>
      <p className="product-details">{details}</p>
      <p className="product-price">${price.toFixed(2)}</p>
      <button onClick={handleOrder} className="order-button">Order on WhatsApp</button>
    </div>
  );
};

export default ProductCard;

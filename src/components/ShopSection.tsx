import React from 'react';

const ShopSection = ({ product }) => {
  const handleOrderClick = () => {
    const message = `🛍️ *Product:* ${product.name}\n💰 *Price:* $${product.price}\n📦 *Category:* ${product.category}\n📝 *Description:* ${product.description}\n🖼️ *Image URL:* ${product.imageUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Description: {product.description}</p>
      <img src={product.imageUrl} alt={product.name} />
      <button onClick={handleOrderClick}>Order</button>
    </div>
  );
};

export default ShopSection;
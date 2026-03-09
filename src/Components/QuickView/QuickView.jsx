import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import './QuickView.css';

const QuickView = ({ product, onClose }) => {
  const { addToCart, addToWishlist, showToast } = useContext(ShopContext);

  const handleAddToCart = () => {
    addToCart(product.id);
    showToast('Product added to cart!', 'success');
  };

  const handleAddToWishlist = () => {
    addToWishlist(product.id);
    showToast('Added to wishlist!', 'success');
  };

  if (!product) return null;

  return (
    <div className="quickview-overlay" onClick={onClose}>
      <div className="quickview-modal" onClick={(e) => e.stopPropagation()}>
        <button className="quickview-close" onClick={onClose}>×</button>
        
        <div className="quickview-content">
          <div className="quickview-image">
            <img src={product.image} alt={product.name} />
            <span className="quickview-badge">
              {Math.round(((product.old_price - product.new_price) / product.old_price) * 100)}% OFF
            </span>
          </div>
          
          <div className="quickview-details">
            <span className="quickview-category">{product.category}</span>
            <h2 className="quickview-title">{product.name}</h2>
            
            <div className="quickview-rating">
              <div className="stars">
                {'★'.repeat(4)}{'☆'.repeat(1)}
              </div>
              <span className="rating-count">(122 reviews)</span>
            </div>
            
            <div className="quickview-prices">
              <span className="new-price">${product.new_price}</span>
              <span className="old-price">${product.old_price}</span>
            </div>
            
            <p className="quickview-description">
              A lightweight, usually knitted, pullover shirt, close-fitting with a round neckline 
              and short sleeves, worn as an undershirt or outer garment. Premium quality fabric 
              for maximum comfort.
            </p>
            
            <div className="quickview-sizes">
              <span className="size-label">Size:</span>
              <div className="size-options">
                <button className="size-btn">S</button>
                <button className="size-btn active">M</button>
                <button className="size-btn">L</button>
                <button className="size-btn">XL</button>
                <button className="size-btn">XXL</button>
              </div>
            </div>
            
            <div className="quickview-actions">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                Add to Cart
              </button>
              <button className="wishlist-btn" onClick={handleAddToWishlist}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
            </div>
            
            <Link to={`/product/${product.id}`} className="view-full-details" onClick={onClose}>
              View Full Details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;

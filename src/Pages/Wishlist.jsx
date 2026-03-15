import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import './CSS/Wishlist.css';

const Wishlist = () => {
  const { wishlistItems, all_product, removeFromWishlist, addToCart, showToast } = useContext(ShopContext);

  const getWishlistProducts = () => {
    return all_product.filter(product => wishlistItems[product.id]);
  };

  const wishlistProducts = getWishlistProducts();

  const handleAddToCart = (id) => {
    addToCart(id);
    showToast('Added to cart!', 'success');
  };
 
  const handleRemove = (id) => {
    removeFromWishlist(id);
    showToast('Removed from wishlist', 'info');
  };

  return (
    <div className="wishlist">
      <div className="wishlist-header">
        <h1>My Wishlist</h1>
        <p>{wishlistProducts.length} items in your wishlist</p>
      </div>

      {wishlistProducts.length === 0 ? (
        <div className="wishlist-empty">
          <div className="empty-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          <h2>Your wishlist is empty</h2>
          <p>Save items you love for later by clicking the heart icon on any product</p>
          <Link to="/" className="start-shopping-btn">Start Shopping</Link>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistProducts.map((product) => (
            <div key={product.id} className="wishlist-item">
              <button className="remove-btn" onClick={() => handleRemove(product.id)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              <Link to={`/product/${product.id}`} className="wishlist-item-image">
                <img src={product.image} alt={product.name} />
                <span className="discount-badge">
                  {Math.round(((product.old_price - product.new_price) / product.old_price) * 100)}% OFF
                </span>
              </Link>
              <div className="wishlist-item-info">
                <span className="category">{product.category}</span>
                <Link to={`/product/${product.id}`}>
                  <h3>{product.name}</h3>
                </Link>
                <div className="rating">
                  {'★'.repeat(4)}{'☆'.repeat(1)}
                  <span>(122)</span>
                </div>
                <div className="prices">
                  <span className="new-price">${product.new_price}</span>
                  <span className="old-price">${product.old_price}</span>
                </div>
                <button className="add-to-cart-btn" onClick={() => handleAddToCart(product.id)}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

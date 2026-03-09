import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
import { ShopContext } from '../../Context/ShopContext'
import QuickView from '../QuickView/QuickView'

 const Item = (props) => {
  const { addToCart, toggleWishlist, wishlistItems, showToast, all_product } = useContext(ShopContext);
  const [showQuickView, setShowQuickView] = useState(false);
  
  const isWishlisted = wishlistItems[props.id];
  const product = all_product.find(p => p.id === props.id);
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(props.id);
    showToast('Added to cart!', 'success');
  };
  
  const handleWishlist = (e) => {
    e.preventDefault();
    toggleWishlist(props.id);
    showToast(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist!', isWishlisted ? 'info' : 'success');
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    setShowQuickView(true);
  };
  
  const discount = Math.round(((props.old_price - props.new_price) / props.old_price) * 100);

  return (
    <>
      <div className='item'>
          <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0,0)}>
            <div className="item-image-wrap">
              <img src={props.image} alt="" />
              {discount > 0 && <span className="item-discount">-{discount}%</span>}
              <div className="item-overlay">
                <button className={`item-wishlist-btn ${isWishlisted ? 'active' : ''}`} onClick={handleWishlist}>
                  <svg viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <button className="item-quickview-btn" onClick={handleQuickView}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </button>
                <button className="item-cart-btn" onClick={handleAddToCart}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="item-info">
              <span className="item-category">{props.category || 'Fashion'}</span>
              <p>{props.name}</p>
              <div className="item-rating">
                {'★'.repeat(4)}{'☆'.repeat(1)}
                <span>(122)</span>
              </div>
              <div className="item-prices">
                <span className='item-price-new'>${props.new_price}</span>
                <span className='item-price-old'>${props.old_price}</span>
              </div>
            </div>
          </Link>
      </div>
      {showQuickView && product && (
        <QuickView product={product} onClose={() => setShowQuickView(false)} />
      )}
    </>
  )
}

export default Item
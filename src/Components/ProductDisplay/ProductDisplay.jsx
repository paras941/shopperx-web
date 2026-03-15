import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star_icon from  "../../assets/assets/Assets/star_icon.png";
import star_dull_icon from  "../../assets/assets/Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';


 const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart, toggleWishlist, wishlistItems, showToast}=useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState('M');
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(0);

    const isWishlisted = wishlistItems[product.id];
    const discount = Math.round(((product.old_price - product.new_price) / product.old_price) * 100);

    const handleAddToCart = () => {
      for(let i = 0; i < quantity; i++) {
        addToCart(product.id);
      }
      showToast(`${quantity} item(s) added to cart!`, 'success');
    };

    const handleWishlist = () => {
      toggleWishlist(product.id);
      showToast(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist!', isWishlisted ? 'info' : 'success');
    }; 

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            {[0, 1, 2, 3].map((index) => (
              <img 
                key={index}
                src={product.image} 
                alt="" 
                className={mainImage === index ? 'active' : ''}
                onClick={() => setMainImage(index)}
              />
            ))}
          </div>
          <div className="productdisplay-img">
            <span className="product-badge">-{discount}%</span>
            <img className='productdisplay-main-img' src={product.image} alt="" />
          </div>
        </div>
        <div className="productdisplay-right">
          <span className="product-category">{product.category}</span>
          <h1>{product.name}</h1>
          <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122 reviews)</p>
          </div>
          <div className='productdisplay-right-prices'>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <span className="price-save">You save ${(product.old_price - product.new_price).toFixed(2)}</span>
          </div>
          <div className="productdisplay-right-description">
            A lightweight, usually knitted, pullover shirt, close-fitting with a round neckline and short sleeves, 
            worn as an undershirt or outer garment. Premium quality fabric for maximum comfort and style.
          </div>
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-size-options">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <div 
                  key={size}
                  className={selectedSize === size ? 'active' : ''}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="productdisplay-quantity">
            <h1>Quantity</h1>
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>
          <div className="productdisplay-actions">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              ADD TO CART
            </button>
            <button className={`wishlist-btn ${isWishlisted ? 'active' : ''}`} onClick={handleWishlist}>
              <svg viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
          </div>
          <div className="product-meta">
            <p><span>Category:</span> {product.category}, T-Shirt, Crop Top</p>
            <p><span>Tags:</span> Modern, Latest, Trending</p>
            <p><span>SKU:</span> SHX-{product.id.toString().padStart(4, '0')}</p>
          </div>
          <div className="product-features">
            <div className="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="3" width="15" height="13"/>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/>
                <circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
              <span>Free Shipping</span>
            </div>
            <div className="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 4 23 10 17 10"/>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
              </svg>
              <span>30-Day Returns</span>
            </div>
            <div className="feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductDisplay;
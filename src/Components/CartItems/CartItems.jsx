import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './CardItems.css'
import{ShopContext} from '../../Context/ShopContext'
import remove_icon from "../../assets/assets/Assets/cart_cross_icon.png";

const CardItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removefromCart, addToCart, updateCartQuantity, showToast} =useContext(ShopContext);
    
    const handleRemove = (id) => {
      removefromCart(id); 
      showToast('Item removed from cart', 'info');
    };

    const handleQuantityChange = (id, change) => {
      if (change === -1 && cartItems[id] <= 1) {
        handleRemove(id);
      } else {
        updateCartQuantity(id, cartItems[id] + change);
      }
    };

    const cartProducts = all_product.filter(e => cartItems[e.id] > 0);
    
  return (
    <div className='carditems'>
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p>{cartProducts.length} {cartProducts.length === 1 ? 'item' : 'items'} in your cart</p>
      </div>

      {cartProducts.length === 0 ? (
        <div className="cart-empty">
          <div className="empty-cart-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything yet</p>
          <Link to="/" className="start-shopping-btn">Start Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {cartProducts.map((e)=>{
            return (
              <div key={e.id} className="cart-item-row">
                <div className="cartitems-format-main cartitems-format">
                    <Link to={`/product/${e.id}`}>
                      <img src={e.image} alt="" className='carticon-product-icon' />
                    </Link>
                    <div className="cart-item-details">
                      <Link to={`/product/${e.id}`}><p className="cart-item-name">{e.name}</p></Link>
                      <span className="cart-item-category">{e.category}</span>
                    </div>
                    <p className="cart-item-price">${e.new_price}</p>
                    <div className="quantity-controls">
                      <button onClick={() => handleQuantityChange(e.id, -1)}>−</button>
                      <span>{cartItems[e.id]}</span>
                      <button onClick={() => handleQuantityChange(e.id, 1)}>+</button>
                    </div>
                    <p className="cart-item-total">${(e.new_price*cartItems[e.id]).toFixed(2)}</p>
                    <button className="remove-btn" onClick={()=>{handleRemove(e.id)}}>
                      <img className='cartitems-remove-icon' src={remove_icon} alt="" />
                    </button>
                </div>
                <hr />
              </div>
            );
          })}
          <div className="cartitmes-down">
            <div className="cartitmes-total">
              <h2>Cart Totals</h2>
            
              <div className="cartitmes-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount().toFixed(2)}</p>
              </div>
              <hr />
              <div className="cartitmes-total-item">
                <p>Shipping</p>
                <p className="free-shipping">FREE</p>
              </div>
              <hr />
              <div className="cartitmes-total-item">
                <p>Tax (8%)</p>
                <p>${(getTotalCartAmount() * 0.08).toFixed(2)}</p>
              </div>
              <hr />
              <div className="cartitmes-total-item total-row">
                <h3>Total</h3>
                <h3>${(getTotalCartAmount() * 1.08).toFixed(2)}</h3>
              </div>
              <Link to="/checkout"><button className="checkout-btn">PROCEED TO CHECKOUT</button></Link>
            </div>
            <div className="cartitems-promocode">
              <p>If you have a promo code, enter it here</p>
              <div className="cartitem-promobox">
                <input type="text" placeholder='Enter promo code' />
                <button>Apply</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CardItems;
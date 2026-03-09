import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';
import './CSS/Checkout.css';

const Checkout = () => {
  const { cartItems, all_product, getTotalCartAmount, showToast, clearCart } = useContext(ShopContext);
  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getCartProducts = () => {
    return all_product.filter(product => cartItems[product.id] > 0);
  };

  const handlePlaceOrder = () => {
    if (!formData.firstName || !formData.email || !formData.address || !formData.city) {
      showToast('Please fill in all required fields', 'error');
      return;
    }
    if (step === 2 && (!formData.cardNumber || !formData.cardName || !formData.expiry || !formData.cvv)) {
      showToast('Please fill in payment details', 'error');
      return;
    }
    
    setOrderPlaced(true);
    clearCart();
    showToast('Order placed successfully!', 'success');
  };

  if (orderPlaced) {
    return (
      <div className="checkout-success">
        <div className="success-animation">
          <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </div>
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for your purchase, {formData.firstName}!</p>
        <p className="order-number">Order #SHX{Math.floor(Math.random() * 100000)}</p>
        <p className="order-email">Confirmation sent to: {formData.email}</p>
        <Link to="/" className="continue-shopping-btn">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="checkout">
      <div className="checkout-header">
        <h1>Checkout</h1>
        <div className="checkout-steps">
          <div className={`step ${step >= 1 ? 'active' : ''}`}>
            <span className="step-number">1</span>
            <span className="step-text">Shipping</span>
          </div>
          <div className="step-line"></div>
          <div className={`step ${step >= 2 ? 'active' : ''}`}>
            <span className="step-number">2</span>
            <span className="step-text">Payment</span>
          </div>
          <div className="step-line"></div>
          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <span className="step-number">3</span>
            <span className="step-text">Review</span>
          </div>
        </div>
      </div>

      <div className="checkout-content">
        <div className="checkout-form">
          {step === 1 && (
            <div className="shipping-form">
              <h2>Shipping Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group full-width">
                <label>Address *</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>City *</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input type="text" name="state" value={formData.state} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>ZIP Code</label>
                  <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Country</label>
                  <select name="country" value={formData.country} onChange={handleChange}>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                    <option>India</option>
                  </select>
                </div>
              </div>
              <button className="next-btn" onClick={() => setStep(2)}>Continue to Payment</button>
            </div>
          )}

          {step === 2 && (
            <div className="payment-form">
              <h2>Payment Method</h2>
              <div className="payment-options">
                <label className="payment-option active">
                  <input type="radio" name="payment" defaultChecked />
                  <div className="option-content">
                    <span className="option-icon">💳</span>
                    <span>Credit/Debit Card</span>
                  </div>
                </label>
                <label className="payment-option">
                  <input type="radio" name="payment" />
                  <div className="option-content">
                    <span className="option-icon">🅿️</span>
                    <span>PayPal</span>
                  </div>
                </label>
              </div>
              <div className="card-form">
                <div className="form-group full-width">
                  <label>Card Number</label>
                  <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="1234 5678 9012 3456" maxLength="19" />
                </div>
                <div className="form-group full-width">
                  <label>Name on Card</label>
                  <input type="text" name="cardName" value={formData.cardName} onChange={handleChange} />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" name="expiry" value={formData.expiry} onChange={handleChange} placeholder="MM/YY" maxLength="5" />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} placeholder="123" maxLength="4" />
                  </div>
                </div>
              </div>
              <div className="form-buttons">
                <button className="back-btn" onClick={() => setStep(1)}>Back</button>
                <button className="next-btn" onClick={() => setStep(3)}>Review Order</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="review-form">
              <h2>Review Your Order</h2>
              <div className="review-section">
                <h3>Shipping Address</h3>
                <p>{formData.firstName} {formData.lastName}</p>
                <p>{formData.address}</p>
                <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                <p>{formData.country}</p>
                <button className="edit-btn" onClick={() => setStep(1)}>Edit</button>
              </div>
              <div className="review-section">
                <h3>Payment Method</h3>
                <p>Card ending in {formData.cardNumber.slice(-4)}</p>
                <button className="edit-btn" onClick={() => setStep(2)}>Edit</button>
              </div>
              <div className="review-section">
                <h3>Order Items</h3>
                {getCartProducts().map((product) => (
                  <div key={product.id} className="review-item">
                    <img src={product.image} alt={product.name} />
                    <div className="review-item-info">
                      <p>{product.name}</p>
                      <span>Qty: {cartItems[product.id]}</span>
                    </div>
                    <span className="review-item-price">${product.new_price * cartItems[product.id]}</span>
                  </div>
                ))}
              </div>
              <div className="form-buttons">
                <button className="back-btn" onClick={() => setStep(2)}>Back</button>
                <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
              </div>
            </div>
          )}
        </div>

        <div className="checkout-summary">
          <h2>Order Summary</h2>
          <div className="summary-items">
            {getCartProducts().map((product) => (
              <div key={product.id} className="summary-item">
                <div className="summary-item-image">
                  <img src={product.image} alt={product.name} />
                  <span className="qty-badge">{cartItems[product.id]}</span>
                </div>
                <div className="summary-item-info">
                  <p>{product.name}</p>
                  <span>${product.new_price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="summary-totals">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${getTotalCartAmount()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className="free">FREE</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>${(getTotalCartAmount() * 0.08).toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${(getTotalCartAmount() * 1.08).toFixed(2)}</span>
            </div>
          </div>
          <div className="secure-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span>Secure Checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from "../../assets/assets/Assets/logo.png";
import cart_icon from "../../assets/assets/Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import SearchBar from '../SearchBar/SearchBar';

export const Navbar = () => {

  const [menu ,setMenu]=useState("shop");
  const {getTotalCartItems, getWishlistCount, user, logoutUser, showToast} =useContext(ShopContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logoutUser();
    showToast('Logged out successfully', 'info');
    setShowDropdown(false);
  };

  return (
    <div className="navbar">
       <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
       </div>
       <ul className='nav-menu'>
         <li onClick={()=>{setMenu("shop");}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("mens");}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("womens");}}><Link style={{textDecoration: 'none'}} to='/womens'>Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("kids");}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
       </ul>
       <SearchBar />
       <div className="nav-login-cart">
        {user ? (
          <div className="nav-user" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
            <div className="user-avatar">{user.name.charAt(0).toUpperCase()}</div>
            {showDropdown && (
              <div className="user-dropdown">
                <div className="dropdown-header">
                  <p className="user-name">{user.name}</p>
                  <p className="user-email">{user.email}</p>
                </div>
                <Link to="/wishlist" className="dropdown-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  My Wishlist
                </Link>
                <Link to="/cart" className="dropdown-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1"/>
                    <circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                  </svg>
                  My Cart
                </Link>
                <button className="dropdown-item logout" onClick={handleLogout}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    <polyline points="16 17 21 12 16 7"/>
                    <line x1="21" y1="12" x2="9" y2="12"/>
                  </svg>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to='/login'><button>Login</button></Link>
        )}
        <Link to='/wishlist' className='nav-wishlist'>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          {getWishlistCount() > 0 && <div className="nav-wishlist-count">{getWishlistCount()}</div>}
        </Link>
        <Link to='/cart'><img src={cart_icon} alt=""/></Link> 
         <div className="nav-cart-count">{getTotalCartItems()}</div>
       </div>
    </div>
  )
}

export default Navbar 

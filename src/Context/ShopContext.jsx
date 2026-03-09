import React, { createContext, useState } from "react";
import all_product from "../assets/assets/Assets/all_product.jsx";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let product of all_product) {
    cart[product.id] = 0;
  }
  return cart;
};

const getDefaultWishlist = () => {
  let wishlist = {};
  for (let product of all_product) {
    wishlist[product.id] = false;
  }
  return wishlist;
};

const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [wishlistItems, setWishlistItems] = useState(getDefaultWishlist());
  const [toast, setToast] = useState(null);
  const [user, setUser] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removefromCart = (itemId) => {
    setCartItems(prev => {
      if (prev[itemId] <= 0) return prev;
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const updateCartQuantity = (itemId, quantity) => {
    setCartItems(prev => ({ ...prev, [itemId]: Math.max(0, quantity) }));
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  const addToWishlist = (itemId) => {
    setWishlistItems(prev => ({ ...prev, [itemId]: true }));
  };

  const removeFromWishlist = (itemId) => {
    setWishlistItems(prev => ({ ...prev, [itemId]: false }));
  };

  const toggleWishlist = (itemId) => {
    setWishlistItems(prev => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const getWishlistCount = () => {
    return Object.values(wishlistItems).filter(Boolean).length;
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

   const getTotalCartItems =()=>{
    let totalItem =0;
    for(const item in cartItems){
      if(cartItems[item]>0)
      {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
   }

  const loginUser = (userData) => {
    setUser(userData);
  };

  const logoutUser = () => {
    setUser(null);
  };

  const contextValue = {
    getTotalCartItems, 
    getTotalCartAmount, 
    all_product, 
    cartItems, 
    addToCart, 
    removefromCart,
    updateCartQuantity,
    clearCart,
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    getWishlistCount,
    toast,
    showToast,
    hideToast,
    user,
    loginUser,
    logoutUser
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

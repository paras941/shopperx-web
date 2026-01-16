import React, { useContext } from 'react'
import './CardItems.css'
import{ShopContext} from '../../Context/ShopContext'
import remove_icon from "../../assets/assets/Assets/cart_cross_icon.png";

const CardItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removefromCart} =useContext(ShopContext);
    
  return (
    <div className='carditems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return <div>
        <div className=" cartitems-format-main cartitems-format ">
            <img src={e.image} alt="" className='carticon-product-icon' />
            <p>{e.name}</p>
            <p>{e.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
            <p>${e.new_price*cartItems[e.id]}</p>
           <button><img className ='cartitems-remove-icon'src={remove_icon} onClick={()=>{removefromCart(e.id)}} alt="" /></button> 
        </div>
        <hr />
      </div>
        }
        return null;
      })}
      <div className="cartitmes-down">
        <div className="cartitmes-total">
          <h1>cart Totals</h1>
      
        <div className="cartitmes-total-item">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cartitmes-total-item">
          <p>Shippoing Fee</p>
          <p>Free</p>
        </div>
        <hr />
        <div className="cartitmes-total-item">
          <h3>Total</h3>
          <h3>${getTotalCartAmount()}</h3>
        </div>
        </div>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <div className="cartitems-promocode">
        <p>If you have a promo code  , Enter it here </p>
        <div className="cartitem-promobox">
          <input type="text" placeholder='Enter your promo Code ' />
          <button>Submit </button>
        </div>
      </div>
    </div>
   
  )
}

export default CardItems;
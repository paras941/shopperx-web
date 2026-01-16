import React from 'react'
import './DescriptionBox.css'

 const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
         <div className="descriptionbox-nav-box">Description</div>
          <div className="descriptionbox-nav-box-fade"> Reviews (122)</div>
          </div>
          <div className="descriptionbox-description">
            <p> 
              This e-commerce website is a complete online shopping platform built with a modern front-end architecture that allows users to explore products by category, view detailed product pages, and navigate smoothly without page reloads. The application uses reusable React components and global state management to handle product data, routing, and UI updates efficiently. It provides a clean and responsive user interface where customers can browse items, compare prices, view discounts, and move between categories and individual product pages with fast client-side navigation
            </p>
            <p>
              The structure is designed to be scalable, making it easy to add features like user authentication, cart and checkout flow, payment gateway integration, order tracking, and admin product management in the future. Overall, the project demonstrates practical implementation of real-world e-commerce concepts such as component-based design, state sharing, routing, and performance-focused UI development rather than just being a basic static website.
            </p>
          </div>
       </div>    
   
  )
}

export default DescriptionBox;
import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

 const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0,0)}>
          <div className="item-image-wrap"><img src={props.image} alt="" /></div>
          <div className="item-info">
            <p>{props.name}</p>
            <div className="item-prices">
              <span className='item-price-new'>${props.new_price}</span>
              <span className='item-price-old'>${props.old_price}</span>
            </div>
          </div>
        </Link>
    </div>
  )
}

export default Item
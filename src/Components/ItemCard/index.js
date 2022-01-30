import React from 'react';
import './style.css'


const ItemCard = ({name,imgSource}) => {
  return <div className='card-container'>
      <div className='item-img-container'>
          <img src={imgSource} alt="latte"/>
      </div>
      <p className='item-name'>{name}</p>
      <button className='cta-1 item-btn'>Order</button>
  </div>;
};

export default ItemCard;

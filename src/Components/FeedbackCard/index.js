import React from 'react';
import './style.css'

const FeedbackCard = ({name,personImg}) => {
    
  return <div className='fb-card-container'>
    <i className="fas fa-quote-right"></i>
    <div className='fb-card'>
        <div className='fb-img-container'>
          <img src={personImg} alt={name}/>
        </div>
        <p className='fb-name'>{name}</p>
        <p className='fb-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>
    </div>
      
      
  </div>
};

export default FeedbackCard;

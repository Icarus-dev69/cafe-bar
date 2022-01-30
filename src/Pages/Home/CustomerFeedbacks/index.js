import React from 'react';
import './style.css'
import Slider from '../../../Components/Slider'
import FeedbackCard from '../../../Components/FeedbackCard';
import Person1 from '../../../Imgs/People/Person1.jpg'
import Person2 from '../../../Imgs/People/Person2.jpg'
import Person3 from '../../../Imgs/People/Person3.jpg'
import Person4 from '../../../Imgs/People/Person4.jpg'
import Person5 from '../../../Imgs/People/Person5.jpg'
import Person6 from '../../../Imgs/People/Person6.jpg'

const CustomerFeedbacks = () => {
  return <section className='fb-section'>
      <p className='tag'>Customer Feedbacks</p>
      <Slider sliderName="fb">
          <FeedbackCard name='Person Name' personImg={Person1}/>
          <FeedbackCard name='Person Name' personImg={Person2}/>
          <FeedbackCard name='Person Name' personImg={Person3}/>
          <FeedbackCard name='Person Name' personImg={Person4}/>
          <FeedbackCard name='Person Name' personImg={Person5}/>
          <FeedbackCard name='Person Name' personImg={Person6}/>
      </Slider>
  </section>;
};

export default CustomerFeedbacks;

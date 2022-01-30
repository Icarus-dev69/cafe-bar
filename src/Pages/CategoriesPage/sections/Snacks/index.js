import React from 'react';
import Slider from '../../../../Components/Slider';
import ItemCard from '../../../../Components/ItemCard'
import Blueberry from '../../../../Imgs/Ice-cream/Blueberry.jpg'
import Cheese from '../../../../Imgs/Snacks/Cheese Sandwich.jpg'
import Chips from '../../../../Imgs/Snacks/Chips.jpg'
import Cookies from '../../../../Imgs/Snacks/Cookies.jpg'
import Fries from '../../../../Imgs/Snacks/French Fries.jpg'
import Popcorn from '../../../../Imgs/Snacks/Popcorn.jpg'
const Snacks = () => {
  return <div className='carousel-sec' id='snacks'>
  <p className='tag'>Snacks</p>
  <Slider sliderName='snacks'>
      <ItemCard name='Cookies' imgSource={Cookies}/>
      <ItemCard name='French Fries' imgSource={Fries}/>
      <ItemCard name='Chips' imgSource={Chips}/>
      <ItemCard name='Popcorn' imgSource={Popcorn}/>
      <ItemCard name='Cheese Sandwich' imgSource={Cheese}/>
  </Slider>
</div>;
};

export default Snacks;

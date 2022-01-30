import React from 'react';
import Slider from '../../../../Components/Slider';
import ItemCard from '../../../../Components/ItemCard'
import Bacon from '../../../../Imgs/Burger/Bacon Burger.jpg'
import Beef from '../../../../Imgs/Burger/Beef Burger.jpg'
import Chicken from '../../../../Imgs/Burger/Chicken Burger.jpg'
import Lamb from '../../../../Imgs/Burger/Lamb Burger.jpg'
import Veggie from '../../../../Imgs/Burger/Veggie Burger.jpg'
const Burger = () => {
  return <div className='carousel-sec' id='burger'>
  <p className='tag'>Burger</p>
  <Slider sliderName='burger'>
      <ItemCard name='Beef Burger' imgSource={Beef}/>
      <ItemCard name='Chicken Burger' imgSource={Chicken}/>
      <ItemCard name='Lamb Burger' imgSource={Lamb}/>
      <ItemCard name='Veggie Burger' imgSource={Veggie}/>
      <ItemCard name='Bacon Burger' imgSource={Bacon}/>
  </Slider>
</div>;
};

export default Burger;

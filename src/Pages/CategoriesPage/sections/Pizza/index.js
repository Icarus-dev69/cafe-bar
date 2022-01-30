import React from 'react';
import Slider from '../../../../Components/Slider'
import ItemCard from '../../../../Components/ItemCard'
import Cheese from '../../../../Imgs/Pizza/Cheese Pizza.jpg'
import Hawaiian from '../../../../Imgs/Pizza/Hawaiian Pizza.jpg'
import Margherita from '../../../../Imgs/Pizza/Margherita Pizza.jpg'
import Pepperoni from '../../../../Imgs/Pizza/Pepperoni Pizza.jpg'
import Supreme from '../../../../Imgs/Pizza/Supreme Pizza.jpg'
import Veggie from '../../../../Imgs/Pizza/Veggie Pizza.jpg'
const Pizza = () => {
  return <div className='carousel-sec' id='pizza'>
  <p className='tag'>Pizza</p>
  <Slider sliderName='pizza'>
      <ItemCard name='Cheese Pizza' imgSource={Cheese}/>
      <ItemCard name='Veggie Pizza' imgSource={Veggie}/>
      <ItemCard name='Pepperoni Pizza' imgSource={Pepperoni}/>
      <ItemCard name='Margherita Pizza' imgSource={Margherita}/>
      <ItemCard name='Supreme Pizza' imgSource={Supreme}/>
      <ItemCard name='Hawaiian Pizza' imgSource={Hawaiian}/>
  </Slider>
</div>;
};

export default Pizza;

import React from 'react';
import Slider from '../../../../Components/Slider'
import ItemCard from '../../../../Components/ItemCard'
import Blueberry from '../../../../Imgs/Ice-cream/Blueberry.jpg'
import Chocolate from '../../../../Imgs/Ice-cream/Chocolate.jpg'
import Mango from '../../../../Imgs/Ice-cream/Mango.jpg'
import StrawBerry from '../../../../Imgs/Ice-cream/StrawBerry.jpg'
import Vanilla from '../../../../Imgs/Ice-cream/Vanilla.jpg'
const IceCream = () => {
  return <div className='carousel-sec' id='ice-cream'>
  <p className='tag'>Ice Cream</p>
  <Slider sliderName='ice-cream'>
      <ItemCard name='Chocolate' imgSource={Chocolate}/>
      <ItemCard name='Vanilla' imgSource={Vanilla}/>
      <ItemCard name='Strawberry' imgSource={StrawBerry}/>
      <ItemCard name='Blueberry' imgSource={Blueberry}/>
      <ItemCard name='Mango' imgSource={Mango}/>
  </Slider>
</div>;
};

export default IceCream;

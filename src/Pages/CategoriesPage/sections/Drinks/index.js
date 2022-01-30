import React from 'react';
import Slider from '../../../../Components/Slider';
import ItemCard from '../../../../Components/ItemCard';
import Bellini from '../../../../Imgs/Drinks/Bellini.jpg'
import Gin from '../../../../Imgs/Drinks/Gin & Tonic.jpg'
import Martini from '../../../../Imgs/Drinks/Martini.jpg'
import Moscow from '../../../../Imgs/Drinks/Moscow Mule.jpg'
import Old from '../../../../Imgs/Drinks/Old Fashined.jpg'
import White from '../../../../Imgs/Drinks/White Russian.jpg'

const Drinks = () => {
  return <div className='carousel-sec' id='drinks'>
  <p className='tag'>Drinks</p>
  <Slider sliderName='drinks'>
      <ItemCard name='Martini' imgSource={Martini}/>
      <ItemCard name='Old Fashioned' imgSource={Old}/>
      <ItemCard name='Moscow Mule' imgSource={Moscow}/>
      <ItemCard name='Bellini' imgSource={Bellini}/>
      <ItemCard name='Gin & Tonic' imgSource={Gin}/>
      <ItemCard name='White Russian' imgSource={White}/>
      
  </Slider>
</div>;
};

export default Drinks;

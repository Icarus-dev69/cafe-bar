import React from 'react';
import Slider from '../../../../Components/Slider'
import ItemCard from '../../../../Components/ItemCard'
import Latte from '../../../../Imgs/Coffee/Latte.jpg'
import Cappucino from '../../../../Imgs/Coffee/Cappucino.jpg'
import Americano from '../../../../Imgs/Coffee/Americano.jpg'
import Affogato from '../../../../Imgs/Coffee/Affogato.jpg'
import Mocha from '../../../../Imgs/Coffee/Mocha.jpg'
import Espresso from '../../../../Imgs/Coffee/Espresso.jpg'
import Irish from '../../../../Imgs/Coffee/Irish Coffee.jpg'
const Coffee = () => {
  return <div className='carousel-sec' id='coffee'>
      <p className='tag'>Coffee</p>
      <Slider sliderName='coffee'>
          <ItemCard name='Latte' imgSource={Latte}/>
          <ItemCard name='Cappucino' imgSource={Cappucino}/>
          <ItemCard name='Americano' imgSource={Americano}/>
          <ItemCard name='Affogato' imgSource={Affogato}/>
          <ItemCard name='Mocha' imgSource={Mocha}/>
          <ItemCard name='Espresso' imgSource={Espresso}/>
          <ItemCard name='Irish Coffee' imgSource={Irish}/>
      </Slider>
  </div>;
};

export default Coffee;

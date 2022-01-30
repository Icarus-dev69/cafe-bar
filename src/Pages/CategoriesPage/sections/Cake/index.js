import React from 'react';
import Slider from '../../../../Components/Slider'
import ItemCard from '../../../../Components/ItemCard'
import Angel from '../../../../Imgs/Cake/Angel Food Cake.jpg'
import Butter from '../../../../Imgs/Cake/Butter Cake.jpg'
import Carrot from '../../../../Imgs/Cake/Carrot Cake.jpg'
import Pound from '../../../../Imgs/Cake/Pound Cake.jpg'
import Red from '../../../../Imgs/Cake/Red Velvet Cake.jpg'
import Sponge from '../../../../Imgs/Cake/Sponge Cake.jpg'
const Cake = () => {
  return <div className='carousel-sec' id='cake'>
  <p className='tag'>Cake</p>
  <Slider sliderName='cake'>
      <ItemCard name='Butter Cake' imgSource={Butter}/>
      <ItemCard name='Pound Cake' imgSource={Pound}/>
      <ItemCard name='Sponge Cake' imgSource={Sponge}/>
      <ItemCard name='Angel Food Cake' imgSource={Angel}/>
      <ItemCard name='Red Velvet Cake' imgSource={Red}/>
      <ItemCard name='Carrot Cake' imgSource={Carrot}/>
  </Slider>
</div>;
};

export default Cake;

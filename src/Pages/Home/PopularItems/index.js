import React from 'react';
import ItemCard from '../../../Components/ItemCard';
import './style.css'
import Latte from '../../../Imgs/Coffee/Latte.jpg'
import Martini from '../../../Imgs/Drinks/Martini.jpg'
import ButterCake from '../../../Imgs/Cake/Butter Cake.jpg'
import CheesePizza from '../../../Imgs/Pizza/Cheese Pizza.jpg'
import ChocolateIceCream from '../../../Imgs/Ice-cream/Chocolate.jpg'
import BeefBurger from '../../../Imgs/Burger/Beef Burger.jpg'
import Slider from '../../../Components/Slider';
const PopularItems = () => {


  return <section className='popular-items-sec'>
      <p className='tag'>Popular Items</p>
     <Slider sliderName='popularItems'>
        <ItemCard  name='Latte' imgSource={Latte}/>
        <ItemCard name="Martini" imgSource={Martini}/>
        <ItemCard name="Butter Cake" imgSource={ButterCake}/>
        <ItemCard name="Cheese Pizza" imgSource={CheesePizza}/>
        <ItemCard name="Chocolate" imgSource={ChocolateIceCream}/>
        <ItemCard name="Beef Burger" imgSource={BeefBurger}/>
     </Slider>
  </section>;
};

export default PopularItems;

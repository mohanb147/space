import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Also...</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Satellite in space'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='View of Earth and Moon'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='The services that will be offered soon... !!'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-8.png'
              text='MARS, at a glance !'
              label='Adventure'
              path='/products'
            />
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

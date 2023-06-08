import React from 'react'
import BookItem from './BookItem'
import './Books.css';
import Detective from '../assets/images/detective.png';
import Science from '../assets/images/science.png';
import Crime from '../assets/images/detective.png';
import Folklore from '../assets/images/detective.png';
import Horror from '../assets/images/horror.png'


function Books() {
  return (
    <div className='books'>
      <h1 className='category-heading'>Explore the Categories</h1>
      <div className='books__container'>
        <div className='books__wrapper'>
          <ul className='books__items'>
            <BookItem
               src={Detective}
               text = 'Put on your Detective hats on as you board along the journey to solving crimes.'
              //  label='Detective'
               path='/'
               />
        
            <BookItem
               src={Horror}
               text = 'Hop on in the journey of solving mysteries in these mind boggling series of books.'
               label='Detective'
               path='/'
               />
  
           
          </ul>
                    <ul className='books__items'>
            <BookItem
               src={Detective}
               text = 'Put on your Detective hats on as you board along the journey to solving crimes.'
              //  label='Detective'
               path='/'
               />
        
            <BookItem
               src={Science}
               text = 'Hop on in the journey of solving mysteries in these mind boggling series of books.'
               label='Detective'
               path='/'
               />
  
            <BookItem
               src={Detective}
               text = 'Put on your Detective hats on as you board along the journey to solving crimes.'
               label='Detective'
               path='/'
               />
                {/* <BookItem
               src={Detective}
               text = 'Hop on in the journey of solving mysterious crimes in these mind boggling series of books.'
               label='Detective'
               path='/'
               /> */}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Books

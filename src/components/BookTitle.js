import React from 'react'
import BookItem from './BookTitleItem'
import './Books.css';
import './BookTitle.css'
import DoItToday from '../assets/images/DoItToday.png';
import Science from '../assets/images/science.png';
import Horror from '../assets/images/horror.png'


function BookTitle() {
  return (
    <div className='booksItem'>
      <h1 className='category-book-heading'>CHECK OUT THESE BOOKS</h1>
      <div className='books__container'>
        <div className='books__wrapper'>
          <ul className='books__items'>
            <BookItem
               src={DoItToday}
               title='Do It Today'
               price='$9.99'
               path='/'
               />
        
            <BookItem
               src={Horror}
               title='Book Title 1'
               price='$9.99'
               path='/'
               />
  
            <BookItem
               src={DoItToday}
               title='Book Title 1'
               price='$9.99'
               path='/'
               />
        
            <BookItem
               src={Science}
               title='Book Title 1'
               price='$9.99'
               path='/'
               />
  
            <BookItem
               src={DoItToday}
               title='Book Title 1'
               price='$9.99'
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

export default BookTitle

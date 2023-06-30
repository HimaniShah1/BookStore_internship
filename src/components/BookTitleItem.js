import React from 'react'
import { Link } from 'react-router-dom'

function BookTitleItem(props) {
  return (
    <>
      <li className='books__item'>
        <Link className='books__item__link' to={props.path}>
            <figure className='books__item__pic-wrap'>
                <img src={props.src} alt="Book" className='books__item__img'/>
            </figure>
            <div className='books__item__info'>
                <h5 className='books__item__text'>{props.title}</h5> 
            <div className='books__item__details'>
            <p className='books__item__price'>{props.price}</p>
          </div>
            </div>

        </Link>

      </li>
    </>
  )
}

export default BookTitleItem

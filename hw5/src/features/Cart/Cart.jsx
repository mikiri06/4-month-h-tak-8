import React from 'react'
import './cart.scss'
import { Link } from 'react-router-dom'
// import { useState } from 'react'
import axios from 'axios'

// import lunch from '../../imgs/Cart/lunch.png'
export const Cart = ({ key, id, img, name, price, category }) => {
	const fetchPostBasket = dish => {
		axios
			.post('http://localhost:5000/basket', dish)
			.then(() => {
				alert('Блюдо добавлено в корзину')
			})
			.catch(error => console.log(error))
	}
	return (
		<div className='card'>
			<Link to={`/card-page/${id}`} key={id} className='link'>
				<img src={img} alt='' />
				<p>{name}</p>
			</Link>
			<div>
				<h3>{price} ₽</h3>
				<button
					onClick={() =>
						fetchPostBasket({
							name: name,
							img: img,
							price: price,
							count: '1',
						})
					}
				>
					В корзину
				</button>
			</div>
		</div>
	)
}

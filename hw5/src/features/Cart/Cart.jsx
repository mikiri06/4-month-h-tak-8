import React from 'react'
import './cart.scss'

// import lunch from '../../imgs/Cart/lunch.png'
export const Cart = ({ key, id, img, name, price, category }) => {
	return (
		<div className='card'>
			<img src={img} alt='' />
			<p>{name}</p>
			<div>
				<h3>{price} ₽</h3>
				<button>В корзину</button>
			</div>
		</div>
	)
}

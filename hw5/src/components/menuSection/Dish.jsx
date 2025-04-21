import React, { useEffect, useState } from 'react'
import './dish.scss'
import { Cart } from '../../features'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Dish = () => {
	const [dishes, setDishes] = useState([])
	const [category, setCategory] = useState('Все')

	const categories = ['Все', ...new Set(dishes.map(item => item.category))]

	const fetchDishes = async () => {
		try {
			const response = await axios.get('http://localhost:5000/dishes')
			setDishes(response.data)
		} catch (error) {
			console.error('Ошибка при получении блюд:', error)
		}
	}

	useEffect(() => {
		fetchDishes()
	}, [])

	const filteredDishes =
		category === 'Все'
			? dishes
			: dishes.filter(item => item.category === category)

	return (
		<div className='container menu-container'>
			<div className='categories'>
				{categories.map(c => (
					<span
						key={c}
						className={`link ${c === category ? 'active' : ''}`}
						onClick={() => setCategory(c)}
					>
						{c}
					</span>
				))}
			</div>

			<div className='wrapper'>
				{filteredDishes.map(dish => (
					<Link to={`/card-page/${dish.id}`} key={dish.id}>
						<Cart
							key={dish.id}
							id={dish.id}
							img={dish.img}
							name={dish.name}
							price={dish.price}
							category={dish.category}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

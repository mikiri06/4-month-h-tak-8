import React, { useEffect, useState } from 'react'
import './menu.scss'
import { Cart } from '../../features'
import axios from 'axios'

export const Dish = () => {
	const [dishes, setDishes] = useState([])
	const [category, setCategory] = useState('Ужин')
	const categories = [...new Set(dishes.map(item => item.category))]

	const handleCategoryChange = newCategory => {
		setCategory(newCategory)
	}

	const fetchDishes = async () => {
		try {
			const response = await axios.get('http://localhost:5000/dishes')
			setDishes(response.data)
		} catch (error) {
			console.error('Error fetching dishes:', error)
		}
	}

	useEffect(() => {
		fetchDishes()
	}, [])

	return (
		<div className='container menu-container'>
			<div className='categories'>
				{' '}
				{categories.map(c => (
					<span
						key={c}
						className={`link ${c === category ? 'active' : ''}`}
						onClick={() => handleCategoryChange(c)}
					>
						{c}
					</span>
				))}
			</div>
			<div className='wrapper'>
				{dishes
					.filter(item => item.category === category)
					.map(dish => (
						<Cart
							key={dish.id}
							id={dish.id}
							img={dish.img}
							name={dish.name}
							price={dish.price}
							category={dish.category}
						/>
					))}
			</div>
		</div>
	)
}

import React from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Modal } from '../modal/Modal'
import { useEffect } from 'react'
import axios from 'axios'
import { FaCartShopping } from 'react-icons/fa6'

export const Header = () => {
	const [open, setOpen] = useState(false)
	const [length, setLength] = useState(0)

	useEffect(() => {
		axios
			.get('http://localhost:5000/basket')
			.then(({ data }) => {
				setLength(data.length)
			})
			.catch(error => console.log(error))
	}, [])

	return (
		<header>
			<div className='container'>
				<nav>
					<NavLink to='/' className='link'>
						<li>Главная</li>
					</NavLink>
					<NavLink to='/menu-page' className='link'>
						<li>Доставка</li>
					</NavLink>
					<NavLink to='/basket-page' className='link basket-link'>
						<li>
							<FaCartShopping />
							<sub>{length}</sub>
						</li>
					</NavLink>
					<button onClick={() => setOpen(true)}>Бронь столика</button>
				</nav>
			</div>
			<Modal open={open} setOpen={setOpen} />
		</header>
	)
}

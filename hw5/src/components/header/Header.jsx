import React from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Modal } from '../modal/Modal'

export const Header = () => {
	const [open, setOpen] = useState(false)

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
					<button onClick={() => setOpen(true)}>Бронь столика</button>
				</nav>
			</div>
			<Modal open={open} setOpen={setOpen} />
		</header>
	)
}

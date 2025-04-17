import React from 'react'
import './header.scss'
import { NavLink } from 'react-router-dom'
export const Header = () => {
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
					<button>Бронь столика</button>
				</nav>
			</div>
		</header>
	)
}

//  default Header;

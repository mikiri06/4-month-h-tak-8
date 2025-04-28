import React from 'react'
import './header.scss'
export const Head = () => {
	return (
		<header className='container header-container'>
			<span className='header-logo'>WORKOUT</span>
			<nav className='header-nav'>
				<a href='#' className='header-link'>
					EXERCISES
				</a>
				<a href='#' className='header-link'>
					TRAINERS
				</a>
				<a href='#' className='header-link'>
					PRICING
				</a>
				<a href='#' className='header-link'>
					LOGIN
				</a>
			</nav>
		</header>
	)
}

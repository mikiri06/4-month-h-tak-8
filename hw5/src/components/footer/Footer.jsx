import React from 'react'
import Logo from '../../imgs/logo.svg'
import './footer.scss'
export const Footer = () => {
	return (
		<footer>
			<div className='wrapper'>
				<img src={Logo} alt='' />
				<a href='#'>Политика конфиденциальности</a>
				<a href='#'>Дизайн d-e-n.ru</a>
			</div>
		</footer>
	)
}

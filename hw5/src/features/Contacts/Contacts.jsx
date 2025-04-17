// import React from 'react'
import './contacts.scss'
// import map from '../../imgs/map.png'
import { Contactsblock } from '../Contactsblock/Contactsblock'
import React from 'react'
import { useState } from 'react'

export const Contacts = () => {
	const [isActive, setIsActive] = useState(false)
	const handleClick = () => {
		setIsActive(!isActive)
	}
	console.log(isActive)
	return (
		<div className='contacts-container container'>
			<div className='line-box'>
				<h3>
					<button onClick={handleClick}>Контакты</button>
				</h3>
				<div className='line'></div>
			</div>
			<div className='row'>
				<div className='times'>
					<div className='time'>
						<div className='minute'>
							<h1>2</h1>
							<p>мин</p>
						</div>
						<p>
							из центра <br /> Санкт-Петербурга
						</p>
					</div>
					<div className='time'>
						<div className='minute'>
							<h1>12</h1>
							<p>мин</p>
						</div>
						<p>
							из города <br /> Зеленогорск
						</p>
					</div>
					<div className='time'>
						<div className='minute'>
							<h1>42</h1>
							<p>мин</p>
						</div>
						<p>
							из аэропорта <br /> Пулково
						</p>
					</div>
					<div className='time'>
						<div className='minute'>
							<h1>2</h1>
							<p>мин</p>
						</div>
						<p>
							из города <br /> Павловск
						</p>
					</div>
				</div>
				{isActive ? <Contactsblock className='description' /> : <div></div>}
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52799876.72403496!2d-161.43510217537585!3d36.126414828942124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2z0KHQvtC10LTQuNC90LXQvdC90YvQtSDQqNGC0LDRgtGLINCQ0LzQtdGA0LjQutC4!5e0!3m2!1sru!2skg!4v1744706991764!5m2!1sru!2skg'
					className='map'
					allowfullscreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'
				></iframe>
			</div>
		</div>
	)
}

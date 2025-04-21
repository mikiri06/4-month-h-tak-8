import React, { useState } from 'react'
import Logo from '../../imgs/logo.svg'
import { CgMenuLeft } from 'react-icons/cg'
import { FaYoutube } from 'react-icons/fa6'
import { IoLogoVk } from 'react-icons/io5'
import { FaTelegramPlane } from 'react-icons/fa'
import './aside.scss'
import { IoClose } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { Modal } from '../../components/modal/Modal'

export const Aside = () => {
	const [click, setClick] = useState(false)
	const [open, setOpen] = useState(false)

	return (
		<aside className={`aside ${click ? 'isActive' : ''}`}>
			<div className='logo-con'>
				<img src={Logo} alt='Логотип' className='logo' />
				<CgMenuLeft
					className='menu-icon burger'
					onClick={() => setClick(!click)}
				/>
				<IoClose className='menu-icon close' onClick={() => setClick(!click)} />
			</div>
			<nav className='nav'>
				<NavLink to='/' className='link' onClick={() => setClick(!click)}>
					<li>Главная</li>
				</NavLink>
				<NavLink
					to='/menu-page'
					className='link'
					onClick={() => setClick(!click)}
				>
					<li>Доставка</li>
				</NavLink>
				<button onClick={() => setOpen(true)}>Бронь столика</button>
				<Modal open={open} setOpen={setOpen} />
			</nav>
			<div className='social-media-icons'>
				<FaYoutube className='icon' />
				<IoLogoVk className='icon' />
				<FaTelegramPlane className='icon' />
			</div>
		</aside>
	)
}

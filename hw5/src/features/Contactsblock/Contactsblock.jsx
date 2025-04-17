import React from 'react'
import './contacksblock.scss'
import { MdLocationPin } from 'react-icons/md'
import { MdPhone } from 'react-icons/md'
export const Contactsblock = () => {
	return (
		<div className='description'>
			<div className='location'>
				<MdLocationPin className='pin' />
				<p>Санкт-Петербург, Северная дорога, 11</p>
			</div>
			<div className='phone'>
				<MdPhone className='pin' />
				<p>+7 (921) 777-77-77</p>
			</div>
			<h5>Время работы</h5>
			<div className='days'>
				<h6>Вск-Чт</h6>
				<p>с 12:00 до 23:00</p>
			</div>
			<div className='days'>
				<h6>Пт-Сб</h6>
				<p>с 12:00 до 3:00</p>
			</div>
			<div className='btns'>
				<button className='brown btn'>Бронь столика</button>
				<button className='transparent btn'>Задать вопрос</button>
			</div>
		</div>
	)
}

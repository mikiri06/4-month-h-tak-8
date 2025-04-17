import React from 'react'
import './menuPage.scss'
import { Dish } from '../../components/menuSection/Dish'
import { Contacts } from '../../features'

export const MenuPage = () => {
	return (
		<div>
			<Dish />
			<Contacts />
		</div>
	)
}

import React from 'react'
import './homePage.scss'
import { About, Banner, Delivery, Menu } from '../../components'
import { Contacts } from '../../features/Contacts/Contacts'

export const HomePage = () => {
	return (
		<div>
			<Banner />
			<About />
			<Menu />
			<Delivery />
			<Contacts />
		</div>
	)
}

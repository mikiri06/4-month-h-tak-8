import React from 'react'
import './banner.scss'
import { Button } from 'antd'
import hero from '../../imgs/hero/hero.png'

export const Bann = () => {
	return (
		<div id='banner' className='container banner-container'>
			<div className='new'>
				<button className='text'>NEW</button>
				<button className='hidh'>
					High Intensity workout to burn calories
				</button>
			</div>
			<h1 className='title'>Cardio Exercise</h1>
			<p className='description'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</p>
			<div className='btns'>
				<Button className='green-btn'>Get Started</Button>
				<Button className='gray-btn'>Preview</Button>
			</div>
			<img src={hero} alt='' className='banner-img' />
			<div className='right'>
				<div className='time'>
					<h3>38:14</h3>
					<p>TIME</p>
				</div>
				<div className='est'>
					<h3>165</h3>
					<p>EST CALORIES</p>
				</div>
			</div>
		</div>
	)
}

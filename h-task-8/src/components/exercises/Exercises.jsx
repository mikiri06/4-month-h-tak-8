import React from 'react'
import './exercises.scss'


import img1 from '../../imgs/exercises/ex-1.png'
import img2 from '../../imgs/exercises/ex-2.png'
import img3 from '../../imgs/exercises/ex-3.png'
import img4 from '../../imgs/exercises/ex-4.png'
import img5 from '../../imgs/exercises/ex-5.png'
import img6 from '../../imgs/exercises/ex-6.png'
export const Exercises = () => {
	return (
		<div id='exercises' className='container'>
			<div className='row'>
				<h2>Popular Exercises</h2>
				<span>SEE MORE EXERCISES</span>
			</div>
			<div className='wrapper'>
				<div className='card'>
					<img src={img1} alt='' />
					<h3 className='title'>Treadmill</h3>
					<p className='desc'>250 est calories</p>
					<div className='time'>58:24</div>
				</div>
				<div className='card'>
					<img src={img2} alt='' />
					<h3 className='title'>Stretching</h3>
					<p className='desc'>250 est calories</p>
					<div className='time'>58:24</div>
				</div>
				<div className='card'>
					<img src={img3} alt='' />
					<h3 className='title'>Yoga</h3>
					<p className='desc'>250 est calories</p>
					<div className='time'>58:24</div>
				</div>
				<div className='card'>
					<img src={img4} alt='' />
					<h3 className='title'>Running</h3>
					<p className='desc'>250 est calories</p>
					<div className='time'>58:24</div>
				</div>
				<div className='card'>
					<img src={img5} alt='' />
					<h3 className='title'>Lifting</h3>
					<p className='desc'>250 est calories</p>
					<div className='time'>58:24</div>
				</div>
				<div className='card'>
					<img src={img6} alt='' />
					<h3 className='title'>PushUp</h3>
					<p className='desc'>250 est calories</p>
					<div className='time'>58:24</div>
				</div>
			</div>
		</div>
	)
}

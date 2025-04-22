// import React from 'react'
import { useParams } from 'react-router-dom'
import './cardPage.scss'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Contacts } from '../../features/Contacts/Contacts'

export const CardPage = () => {
	const { id } = useParams()
	const [dish, setDish] = useState()
	const [count, setCount] = useState(1)

	useEffect(() => {
		axios
			.get(`http://localhost:5000/dishes/${id}`)
			.then(({ data }) => {
				setDish(data)
			})
			.catch(error => console.log(error))
	}, [id])

	const fetchPostBasket = (dish) => {
		axios
			.post('http://localhost:5000/basket', dish)
			.then(() => {
				setCount(1)
				alert('Блюдо добавлено в корзину')
			})
			.catch(error => console.log(error))
	}

	console.log(count);

	return (
		<div className='card-page'>
			<div className='container card-page'>
				{dish && (
					<div className='wrapper'>
						<div className='img-block'>
							<img src={dish.img} alt={dish.name} className='big' />
							<div className='small'>
								<img src={dish.img} alt={dish.name} />
								<img src={dish.img} alt={dish.name} />
								<img src={dish.img} alt={dish.name} />
							</div>
						</div>
						<div className='info-block'>
							<h1 className='name'>{dish.name}</h1>
							<hr />
							<div className='price'>{dish.price} ₽</div>
							<div className='category'>/ {dish.category}</div>
							<p className='servings'>Количество порций:</p>
							<div className='servings-block'>
								<input
									type='number'
									placeholder='1'
									min='1'
									max='10'
									value={count}
									onChange={e => setCount(e.target.value)}
								/>
								<button
									className='add-to-cart'
									onClick={() =>
										fetchPostBasket({
											name: dish.name,
											img: dish.img,
											price: dish.price,
											count: count,
										})

										
									}
								>
									В корзину
								</button>
							</div>
							<hr />
							<h2>Сделать еще вкуснее</h2>
							<div className='more'>
								<div className='supplements'>
									<div className='descrip'>
										<p>Тигровые креветки 60 г</p>
										<h3>450 ₽</h3>
									</div>
									<input type='checkbox' />
								</div>
								<div className='supplements'>
									<div className='descrip'>
										<p>Тигровые креветки 60 г</p>
										<h3>450 ₽</h3>
									</div>
									<input type='checkbox' />
								</div>
								<div className='supplements'>
									<div className='descrip'>
										<p>Тигровые креветки 60 г</p>
										<h3>450 ₽</h3>
									</div>
									<input type='checkbox' />
								</div>
								<div className='supplements'>
									<div className='descrip'>
										<p>Тигровые креветки 60 г</p>
										<h3>450 ₽</h3>
									</div>
									<input type='checkbox' />
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
			<Contacts />
		</div>
	)
}

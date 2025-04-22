import { useState, useEffect } from 'react'
import './basket.scss'
import axios from 'axios'

export const Basket = () => {
	const [data, setData] = useState([])
	const [editId, setEditId] = useState(null)
	const [newCount, setNewCount] = useState(1)

	const fetchBasket = () => {
		axios
			.get('http://localhost:5000/basket')
			.then(({ data }) => {
				setData(data)
			})
			.catch(error => console.log(error))
	}

	const fetchDelete = id => {
		axios
			.delete(`http://localhost:5000/basket/${id}`)
			.then(() => {
				fetchBasket()
			})
			.catch(error => console.log(error))
	}

	const updateCount = (id, count) => {
		axios
			.patch(`http://localhost:5000/basket/${id}`, { count: +count })
			.then(() => {
				setEditId(null)
				fetchBasket()
			})
			.catch(error => console.log(error))
	}

	useEffect(() => {
		fetchBasket()
	}, [])

	const orderDish = () => {
		axios
			.post('http://localhost:5000/order', { name: data })
			.then(() => {
				alert('Заказ оформлен')
			})
			.catch(error => console.log(error))
	}

	return (
		<div className='container basket'>
			<div className='basket-wrapper'>
				{data.map(dish => (
					<div className='basket-card' key={dish.id}>
						<div className='col-6'>
							<img src={dish.img} alt={dish.name} />
						</div>
						<div className='col-6'>
							<p className='name'>{dish.name}</p>
							<p className='price'>{+dish.price * dish.count} ₽</p>
							{editId === dish.id ? (
								<input
									type='number'
									min='1'
									max='10'
									value={newCount}
									onChange={e => setNewCount(e.target.value)}
								/>
							) : (
								<span className='count'>{dish.count}</span>
							)}
							<button onClick={() => fetchDelete(dish.id)}>
								Отменить заказ
							</button>

							{editId === dish.id ? (
								<div className='btns'>
									<button onClick={() => updateCount(dish.id, newCount)}>
										Сохранить
									</button>
									<button onClick={() => setEditId(null)}>Отменить</button>
								</div>
							) : (
								<button
									onClick={() => {
										setEditId(dish.id)
										setNewCount(dish.count)
									}}
								>
									Изменить
								</button>
							)}
						</div>
					</div>
				))}
			</div>
			<h2>
				Итого:
				{data.reduce((acc, item) => acc + +item.price * item.count, 0)}₽
			</h2>
			<button onClick={orderDish}>Оформить заказ</button>
		</div>
	)
}

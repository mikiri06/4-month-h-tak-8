import './modal.scss'
import { IoClose } from 'react-icons/io5'
import logo from '../../imgs/logo.svg'

export const Modal = ({ open, setOpen }) => {
	if (!open) return
	return (
		<div className='modal'>
			<div className='container'>
				<IoClose onClick={() => setOpen(false)} className='close' />
				<img src={logo} alt='logo' className='logo' />
				<h2 className='title'>Забронировать столик</h2>
				<form>
					<input type='text' placeholder='Имя' />
					<input type='phone' placeholder='Телефон' />
					<div className='row'>
						<input type='number' placeholder='Гостей' max='10' min='1' />
						<input type='day' placeholder='Время' />
					</div>
					<button>Забронировать</button>
				</form>
			</div>
		</div>
	)
}

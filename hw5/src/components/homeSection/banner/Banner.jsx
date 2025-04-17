import './banner.scss'
import bg from '../../../imgs/bg.png'
export const Banner = () => {
	return (
		<div className='banner-container'>
			<img src={bg} alt='' />
			<div>
				<h2>Видовой ресторан Food Exxe Relo на Крестовском острове</h2>
			</div>
		</div>
	)
}

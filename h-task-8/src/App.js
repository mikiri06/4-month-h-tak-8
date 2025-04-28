import './App.scss'
import { Head, Bann, Links, Exercises, Workout } from './components/index'

function App() {
	return (
		<div className='App'>
			<Head />
			<Bann />
			<Exercises />
			<Workout />
			<Links />
		</div>
	)
}

export default App

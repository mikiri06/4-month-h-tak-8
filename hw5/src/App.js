import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.scss'
import { CardPage, HomePage, MenuPage, Basket } from './Pages'

import { Header, Footer } from './components'

import { Aside } from './features'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Aside />
			<Routes>
				<Route path='/' element={<HomePage />}></Route>
				<Route path='/card-page/:id' element={<CardPage />}></Route>
				<Route path='/menu-page' element={<MenuPage />}></Route>
				<Route path='/basket-page' element={<Basket />}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App

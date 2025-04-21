import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.scss'
import { CardPage, HomePage, MenuPage } from './Pages'

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
			</Routes>
			<Footer />
		</BrowserRouter>
	)
}

export default App

import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.jsx'
import { FourOhFour } from './FourOhFour'
import { Navigation } from "./shared/components/Navigation.jsx";
import { Footer } from "./shared/components/Footer.jsx";


export function App() {
	return (
		<>
			<BrowserRouter>
				<Navigation/>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path={"*"} element={<FourOhFour />} />
				</Routes>
				<Footer/>
			</BrowserRouter>
		</>
	)
}
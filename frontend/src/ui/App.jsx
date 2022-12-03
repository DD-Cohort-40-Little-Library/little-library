import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.jsx'
import { FourOhFour } from './FourOhFour'
import { Navigation } from "./shared/components/nav-foot-bar/Navigation.jsx";
import { Footer } from "./shared/components/nav-foot-bar/Footer.jsx";
import { CheckIn } from "./CheckIn.jsx";

export function App() {
	return (
		<>
			<BrowserRouter>
				<Navigation/>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path={"*"} element={<FourOhFour />} />
					<Route path='/check-in' element={<CheckIn />} />
				</Routes>
				<Footer/>
			</BrowserRouter>
		</>
	)
}
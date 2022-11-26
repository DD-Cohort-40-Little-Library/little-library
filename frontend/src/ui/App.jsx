import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.jsx'
import { FourOhFour } from './FourOhFour'
import { Navigation } from "./shared/components/nav-foot-bar/Navigation.jsx";
import { Footer } from "./shared/components/nav-foot-bar/Footer.jsx";
import 'mapbox-gl/dist/mapbox-gl.css'
import {EventCreateModal} from "./EventCreateModal";
import {EventUpdateModal} from "./EventUpdateModal.jsx";

export function App() {
	return (
		<>
			<BrowserRouter>
				<Navigation/>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path={"*"} element={<FourOhFour />} />
					<Route path='/event-create-modal'element={<EventCreateModal />} />
					<Route path='/event-update-modal'element={<EventUpdateModal />} />
				</Routes>
				<Footer/>
			</BrowserRouter>
		</>
	)
}
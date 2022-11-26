import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.jsx'
import { FourOhFour } from './FourOhFour'
import {EventCreateModal} from "./EventCreateModal";
import {EventUpdateModal} from "./EventUpdateModal.jsx";


export function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path={"*"} element={<FourOhFour />} />
					<Route path='/event-create-modal'element={<EventCreateModal />} />
					<Route path='/event-update-modal'element={<EventUpdateModal />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
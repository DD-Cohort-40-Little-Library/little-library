import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.jsx'
import { FourOhFour } from './FourOhFour'
import {ProfileUpdate} from "./ProfileUpdate.jsx";


export function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route  path='/' element={<Home />} />
					<Route path={"*"} element={<FourOhFour />} />
					<Route path='/profile-update' element={<ProfileUpdate />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
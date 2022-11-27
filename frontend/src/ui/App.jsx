import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.jsx'
import { FourOhFour } from './FourOhFour'
import {ProfileLanding} from "./ProfileLanding.jsx";


export function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route  path='/' element={<Home />} />
					<Route path={"*"} element={<FourOhFour />} />
					<Route path='/profile-landing' element={<ProfileLanding />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
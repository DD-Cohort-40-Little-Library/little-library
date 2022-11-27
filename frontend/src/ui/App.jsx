import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home.jsx'
import { FourOhFour } from './FourOhFour'
import {LibraryCreate} from "./LibraryCreate";
import {LibraryUpdate} from "./LibraryUpdate";


export function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route  path='/' element={<Home />} />
					<Route path={"*"} element={<FourOhFour />} />
					<Route path={"/library-create"} element={<LibraryCreate/>}/>
					<Route path={"/library-update"} element={<LibraryUpdate/>}/>
				</Routes>
			</BrowserRouter>
		</>
	)
}
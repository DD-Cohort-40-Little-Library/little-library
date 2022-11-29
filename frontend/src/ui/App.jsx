import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './home/Home.jsx'
import { FourOhFour } from './FourOhFour'
import { Navigation } from "./shared/components/nav-foot-bar/Navigation.jsx";
import { Footer } from "./shared/components/nav-foot-bar/Footer.jsx";
import 'mapbox-gl/dist/mapbox-gl.css'
import {EventCreateModal} from "./shared/components/EventCreateModal.jsx";
import {EventUpdateModal} from "./profile-landing/EventUpdateModal.jsx";
import {ProfileRegistration} from './ProfileRegistration.jsx';
import {ProfileLanding} from "./profile-landing/ProfileLanding.jsx";
import {ProfileUpdate} from "./profile-landing/ProfileUpdate.jsx";
import {LibraryCreate} from "./LibraryCreate";
import {LibraryUpdate} from "./profile-landing/LibraryUpdate.jsx";
import {CheckIn} from "./CheckIn.jsx";
import {AboutUs} from "./AboutUs.jsx";
import {LibraryDetails} from "./library-details/LibraryDetails.jsx";
import {Provider} from "react-redux";

export function App({store}) {
	return (
		<>
			<Provider store={store}>
			<BrowserRouter>
				<Navigation/>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path={"*"} element={<FourOhFour />} />
					<Route path='/event-create-modal'element={<EventCreateModal />} />
					<Route path='/event-update-modal'element={<EventUpdateModal />} />
					<Route path='/profile-registration' element={<ProfileRegistration />} />
					<Route path='/profile-landing' element={<ProfileLanding />} />
					<Route path='/profile-update' element={<ProfileUpdate />} />
					<Route path={"/library-create"} element={<LibraryCreate/>}/>
					<Route path={"/library-update"} element={<LibraryUpdate/>}/>
					{/*<Route path='/check-in' element={<CheckIn/>} />*/}
					<Route path='/about-us' element={<AboutUs/>} />
					<Route path={'/library-landing'} element={LibraryDetails} />
				</Routes>
				<Footer/>
			</BrowserRouter>
			</Provider>
		</>
	)
}
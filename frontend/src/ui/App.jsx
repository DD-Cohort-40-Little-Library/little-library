import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './home/Home.jsx'
import { FourOhFour } from './FourOhFour'
import { NavigationBar } from "./shared/components/nav-foot-bar/NavigationBar.jsx";
import { Footer } from "./shared/components/nav-foot-bar/Footer.jsx";
import 'mapbox-gl/dist/mapbox-gl.css'
import {EventUpdateModal} from "./profile-landing/EventUpdateModal.jsx";
import {ProfileRegistration} from './shared/components/main-nav/sign-up/ProfileRegistration.jsx';
import {ProfileUpdate} from "./profile-landing/ProfileUpdate.jsx";
import {LibraryCreate} from "./LibraryCreate.jsx";
import {LibraryUpdate} from "./profile-landing/LibraryUpdate.jsx";
import {AboutUs} from "./AboutUs.jsx";
import {LibraryDetails} from "./library-details/LibraryDetails.jsx";
import {Provider} from "react-redux";
import {ProfileLanding} from "./profile-landing/ProfileLanding.jsx";
import {EventCreatePage} from "./shared/components/EventCreatePage.jsx";


export function App({store}) {
	return (
		<>
			<Provider store={store}>
			<BrowserRouter>
				<NavigationBar/>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path={"*"} element={<FourOhFour />} />
					<Route path='/event-create-page' element={<EventCreatePage />} />
					<Route path='/event-update-modal' element={<EventUpdateModal />} />
					<Route path='/profile-registration' element={<ProfileRegistration />} />
					<Route path='/profile-landing' element={<ProfileLanding />} />
					<Route path='/profile-update' element={<ProfileUpdate />} />
					<Route path={'/library-create'} element={<LibraryCreate/>}/>
					{/*<Route path={'/library-create'} element={<LibraryCreateForm/>}/>*/}
					<Route path={'/library-update'} element={<LibraryUpdate/>}/>
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
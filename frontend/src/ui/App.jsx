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
import {LibraryCreate} from "./LibraryCreate.jsx";
import {LibraryUpdate} from "./profile-landing/LibraryUpdate.jsx";
import {AboutUs} from "./AboutUs.jsx";
import {LibraryDetails} from "./library-details/LibraryDetails.jsx";
import {Provider} from "react-redux";
import {ProfileLanding} from "./profile-landing/ProfileLanding.jsx";
import {EventCreatePage} from "./shared/components/EventCreatePage.jsx";
import {ProfileUpdateModal} from "./profile-landing/ProfileUpdateModal.jsx";
import {SignInSignUpModal} from "./shared/components/main-nav/sign-in/SignInSignUpModal";

export function App({store}) {
	return (
		<>
			<Provider store={store}>
			<BrowserRouter>
				<NavigationBar/>
				<Routes>
					<Route path='/' element={<Home/>} />
					<Route path={"*"} element={<FourOhFour/>} />
					<Route path={'/about-us'} element={<AboutUs/>} />
					<Route path={'/event-create-page'} element={<EventCreatePage/>} />
					<Route path={'/event-update-modal'} element={<EventUpdateModal/>} />
					<Route path={'/library-create'} element={<LibraryCreate/>} />
					<Route exact path={'/library-landing/:libraryId'} element={<LibraryDetails/>} libraryId =":libraryId"  />
					<Route path={'/library-update'} element={<LibraryUpdate/>} />
					<Route path={'/profile-landing'} element={<ProfileLanding/>} />
					<Route path={'/profile-update'} element={<ProfileUpdateModal/>} />
					<Route path={'/signInSignUp-modal'} element={<SignInSignUpModal/>} />
				</Routes>
				<Footer/>
			</BrowserRouter>
			</Provider>
		</>
	)
}
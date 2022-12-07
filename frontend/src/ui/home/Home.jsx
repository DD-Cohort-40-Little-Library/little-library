import React, {useEffect} from "react"
import {Col, Row, Stack} from "react-bootstrap";
import {LibraryMap} from "./LibraryMap.jsx";
import {EventShortListing} from "./EventShortListing.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllEvents} from "../../store/events.js";
import {fetchAllLibraries} from "../../store/libraries.js";
import {SignOutComponent} from "../shared/components/main-nav/SignOut.jsx";
import {SignInSignUpModal} from "../shared/components/main-nav/sign-in/SignInSignUpModal.jsx";

export function Home() {

	const events = useSelector(state => state.events ? state.events : [])

	const libraries = useSelector(state => state.libraries ?? [])
	const dispatch = useDispatch()
	const effects = () => {
		dispatch(fetchAllEvents())
		dispatch(fetchAllLibraries())

	}
	useEffect(effects, [dispatch])

	return (
		<>
				<Row className={"mx-0"}>
					<Col id={"events-column"} className={"flex order-last order-md-first"} md={2}>
						<h2 id={"headLineONE"}>Upcoming Events</h2>
						<Stack gap={3}>
							{libraries.length && events.slice(0,5).map(event => <EventShortListing library={libraries.filter(library => library.libraryId === event.eventLibraryId)[0]} event={event} key={event.eventId}/>)}
						</Stack>
					</Col>

					<Col className={"flex order-md-1"} md={8}>
						<LibraryMap libraries={libraries}/>
					</Col>

					<Col id={"signInUp-column"} className={"flex order-first order-md-last"} md={1}>
						<Stack gap={3}>
							<SignInSignUpModal id={"signInSignUpModal"}/>
							<SignOutComponent/>
						</Stack>
					</Col>
				</Row>
		</>
	)}
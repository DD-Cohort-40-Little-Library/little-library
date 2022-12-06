import React from 'react'
import {Col, Container, Row, Stack} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../store/auth.js";
import {fetchCurrentUser} from "../../store/currentUser.js";
import {fetchAllLibraries} from "../../store/libraries.js";

export const EventShortListing = () => {
	const dispatch = useDispatch()
	const initialEffects = () => {
		dispatch(fetchAllEvents)
	}
	React.useEffect(initialEffects, [dispatch])

}

if (event === null) {
	return <h1>
		Page is loading.
	</h1>
}
const {eventTitle, libraryName, libraryAddress, eventDate, eventStart} = event

	return(
		<>
			<Container id="eventDisplayStack" className={"border rounded"}>
				<Stack gap={2} className={"my-3"}>
					<div>{eventTitle}</div>
					<div>{libraryName}</div>
					<div>{libraryAddress}</div>
					<div>{eventDate}</div>
					<div>{eventStart}</div>
				</Stack>
			</Container>
		</>
	)
}
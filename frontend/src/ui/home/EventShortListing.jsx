import React from 'react'
import {Button, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export const EventShortListing = ({event, library}) => {

	const date = event.eventDate
	const D = new Date(date)
	const time = event.eventStart
	const startTime = new Date(time)
	let hour = ((startTime.getHours() + 7) % 12) || 12
	let minutes = startTime.getMinutes()
	if (startTime.getMinutes() === 0) {
		minutes = minutes + '0'
	}
	const amPm = startTime.getHours() > 12 ? 'AM' : 'PM'
	const finalTime = (hour + ":" + minutes + amPm)

	return(
		<>
			<Container id={"eventShortListing"}>
				<Row className={"shortListingEvent"}>
					<a xs={5}>{library.libraryName}</a>
					<a xs={7}>{library.libraryAddress}</a>
					<a xs={5}>Event Title: {event.eventTitle}</a>
					<a xs={3}>Date: {(D.getMonth() + 1) + '-' + ((D.getDate() + 1) + '-' + (D.getFullYear()))}</a>
					<a xs={2}>Start time: {finalTime}</a>
					<Link to={`/library-landing/${library.libraryId}`}><Button>Details</Button></Link>
				</Row>
			</Container>
		</>
	)
}

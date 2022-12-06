import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {useSelector} from "react-redux";

export const EventShortListing = ({event, library}) => {

	const date = event.eventDate
	const D = new Date(date)

	return(
		<>
			<Container className={"border border-dark rounded"}>
				<Row className={"my-3"}>
					<a xs={5}>{library.libraryName}</a>
					<a xs={7}>{library.libraryAddress}</a>
					{/*<a xs={5}>Type of event: {event.eventType}</a>*/}
					<a xs={5}>Event Title: {event.eventTitle}</a>
					<a xs={3}>Date: {(D.getMonth() + 1) + '/' + (D.getDate() + '/' + (D.getFullYear()))}</a>
					{/*<a xs={2}>Start time: {event.eventStart}</a>*/}
					{/*<a xs={2}>End time: {event.eventEnd}</a>*/}
				</Row>
			</Container>
		</>
	)
}
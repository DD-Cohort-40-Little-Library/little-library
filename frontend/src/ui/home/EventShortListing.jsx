import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import {useSelector} from "react-redux";

export const EventShortListing = ({event, library}) => {

	// const dispatch = useDispatch()

	// const event = useSelector(state => {
	// 	if (state.events[event.eventId] === undefined) {
	// 		return []
	// 	} else {
	// 		return state.events[event.eventId]
	// 	}
	// })



	return(
		<>
			<Container className={"border border-dark rounded"}>
				<Row className={"my-3"}>
					<Col xs={5}>{library.libraryName}</Col>
					<Col xs={7}>Library Address</Col>
				</Row>
				<Row className={"my-3"}>
					<Col xs={3}>{event.eventDate}</Col>
					<Col xs={2}>Event Start</Col>
					<Col xs={2}>Event End</Col>
					<Col xs={5}>Event Type</Col>
				</Row>
				<Row className={"my-3"}>
					<Col>
						{event.eventTitle}
					</Col>
				</Row>
			</Container>
		</>
	)
}
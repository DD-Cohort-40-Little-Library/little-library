import React from 'react'
import {Col, Container, Row} from "react-bootstrap";

export const EventListing = () => {
	return(
		<>
			<Container className={""} id={"eventListingDisplay"}>
				<Row className={"my-3"}>
					<Col xs={5}>Library Name</Col>
					<Col xs={7}>Library Address</Col>
				</Row>
				<Row className={"my-3"}>
					<Col xs={3}>Event Date</Col>
					<Col xs={2}>Event Start</Col>
					<Col xs={2}>Event End</Col>
					<Col xs={5}>Event Type</Col>
				</Row>
				<Row className={"my-3"}>
					<Col>
						Event Title
					</Col>
				</Row>
				<Row className={"my-3"}>
					<Col>Event Description</Col>
				</Row>
			</Container>
		</>
	)
}
import React from 'react'
import {Col, Container, Row} from "react-bootstrap";

export const EventListing = () => {
	return(
		<>
			<Container className={""} id={"eventListingDisplay"}>
				<Row className={"my-3"}>
					<Col sm={6} className={"text-start"}>Library Name</Col>
					<Col sm={6} className={"text-start"}>Library Address</Col>
				</Row>
				<Row className={"my-3"}>
					<Col sm={6} className={"text-start"}>Event Date</Col>
					<Col sm={6} className={"text-start"}>Event Start</Col>
					<Col sm={6} className={"text-start"}>Event End</Col>
					<Col sm={6} className={"text-start"}>Event Type</Col>
				</Row>
				<Row className={"my-3"}>
					<Col>Event Title</Col>
				</Row>
				<Row className={"my-3"}>
					<Col>Event Description</Col>
				</Row>
			</Container>
		</>
	)
}
import React from 'react'
import {Button, Col, Container, Row} from "react-bootstrap";
// import {EventUpdateModal} from "./EventUpdateModal.jsx";

export const EventOwnerListing = () => {
	return(
		<>
			<Container className={"border border-dark rounded"}>
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
				<Row className={"me-0"}>
					<Col xs={{span:5, offset:7}} md={{span:3, offset:9}} lg={{span:2, offset:10}}> <EventUpdateModal/> <Button type={"submit"} variant={"outline-dark"} size={"sm"} >Delete</Button> </Col>
				</Row>
			</Container>
		</>
	)
}
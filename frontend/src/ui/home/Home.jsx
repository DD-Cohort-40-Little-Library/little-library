import React from "react"
import {Button, Col, Container, Form, Row, Stack} from "react-bootstrap";
import {LibraryMap} from "./LibraryMap.jsx";
// import {EventShortListing} from "./EventShortListing.jsx";
import {LibraryDetails} from "../library-details/LibraryDetails.jsx";
import {Link} from "react-router-dom";
import {CheckInDisplay} from "../shared/components/CheckInDisplay.jsx";
import {CheckInForm} from "../shared/components/CheckInForm.jsx";

export function Home() {
	return (
		<>
			<Container id={"home-display"}>
				<Row>
					<Col id={"events-column"} className={"upcomingEvents"} md={3}>
						<h2>Upcoming Events</h2>
						<Stack gap={3}>
							{/*<div className="bg-light border"><EventShortListing/></div>*/}
							<div className="bg-light border">Second event</div>
							<div className="bg-light border">Third event</div>
							<div className="bg-light border">Fourth event</div>
							<div className="bg-light border">Fifth event</div>
							<div className="bg-light border">Sixth event</div>
						</Stack>
					</Col>
					<Col md={8}>
						<LibraryMap/>
					</Col>
				</Row>
			</Container>
		</>
	)
}
import React from "react"
import {Button, Col, Container, Form, Row, Stack} from "react-bootstrap";
import {LibraryMap} from "./LibraryMap.jsx";
import {EventShortListing} from "./EventShortListing.jsx";
import {EventCreateModal} from "../shared/components/EventCreateModal.jsx";
import {Link} from "react-router-dom";



export function Home() {
	return (
		<>
			<Container className={"m-2"}>
				<Row>
					<Col id={"events-column"} className={"p-3 col-md-3"}>
						<h2 id={"sectionHeadlineTwo"} className={"text-center"}>Events</h2>
						<EventCreateModal />
						<Stack gap={3}>
							<div className="bg-light border"><EventShortListing/></div>
							<div className="bg-light border">Second event</div>
							<div className="bg-light border">Third event</div>
							<div className="bg-light border">Fourth event</div>
							<div className="bg-light border">Fifth event</div>
							<div className="bg-light border">Sixth event</div>
						</Stack>
					</Col>
					<Col id={"map"} className={"mx-0 col-md-7"}>
						<LibraryMap/>
					</Col>
					{/*<Col id={"filters"} className={"col-md-2"}>*/}
					{/*	<h2>Filters</h2>*/}
					{/*	<Form>*/}
					{/*		<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
					{/*			<Form.Check type="radio" label="Lil Library" />*/}
					{/*		</Form.Group>*/}
					{/*		<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
					{/*			<Form.Check type="radio" label="Public Library" />*/}
					{/*		</Form.Group>*/}
					{/*		<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
					{/*			<Form.Check type="radio" label="Library Event" />*/}
					{/*		</Form.Group>*/}
					{/*		<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
					{/*			<Form.Check type="radio" label="Lil Library Specialization" />*/}
					{/*		</Form.Group>*/}
					{/*	</Form>*/}
					{/*	<Link to={"/library-create"} className={"btn-primary"}> <Button> Add Library</Button></Link>*/}
					{/*</Col>*/}
				</Row>
			</Container>
		</>
	)
}
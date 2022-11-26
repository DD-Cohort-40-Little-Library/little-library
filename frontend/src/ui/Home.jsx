import React from "react"
import {Col, Container, Form, Row, Stack} from "react-bootstrap";
import {LibraryMap} from "./LibraryMap";


export function Home() {
	return (
		<>
			<Container className={"m-2"}>
				<Row>
					<Col id={"events-column"} className={"border border-dark col-md-3"}>
						<h2>Events</h2>
						<Stack gap={3}>
							<div className="bg-light border">First event</div>
							<div className="bg-light border">Second event</div>
							<div className="bg-light border">Third event</div>
							<div className="bg-light border">Fourth event</div>
							<div className="bg-light border">Fifth event</div>
							<div className="bg-light border">Sixth event</div>
						</Stack>
					</Col>
					<Col id={"map"} className={"border border-warning col-md-7"}>
						<LibraryMap/>
					</Col>
					<Col id={"filters"} className={"col-md-2"}>
						<h2>Filters</h2>
						<Form>
							<Form.Group className="mb-3" controlId="formBasicCheckbox">
								<Form.Check type="radio" label="Lil Library" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicCheckbox">
								<Form.Check type="radio" label="Public Library" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicCheckbox">
								<Form.Check type="radio" label="Library Event" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicCheckbox">
								<Form.Check type="radio" label="Lil Library Specialization" />
							</Form.Group>
						</Form>
					</Col>
				</Row>
			</Container>
		</>
	)
}
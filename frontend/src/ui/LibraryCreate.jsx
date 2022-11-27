import React, {useState} from 'react'
import {Button, Card, Col, Figure, FloatingLabel, Form, Row} from "react-bootstrap";

export const LibraryCreate = () => {
	return(
		<>
			<Form>
			<div fluid="true">
				<div className={"text-center"}>
					<h1>Register Your Library</h1>
				</div>

				{/*Row 1 with User image and upload image*/}
				<Row className={"mx-0"}>
					<Col md={6} className={"m-2 text-center"}>
						<Figure fluid="true">
							<Figure.Image
								alt={"placeholder kitten"}
								src={"http://placekitten.com/210/210"}
								roundedCircle={true}
								/>
							<Figure.Caption className={"text-center"}>userName</Figure.Caption>
						</Figure>
						<Card>
							<Form.Group className={"m-2  text-start"} controlId="libraryInfo.ControlInput1">
								<Form.Label className="mt-1">Library Name:</Form.Label>
								<Form.Control type="text" placeholder="Name of your library"/>
								<Form.Label className="mt-1">Library Address:</Form.Label>
								<Form.Control type="text" placeholder="Street, City NM Zip"/>
								<Form.Check className="mt-1" inline label="Available for events?"type="checkbox"/>
								<Form.Select className="mt-1" aria-label="Library specialization selection">
									<option>(Optional) Choose a specialization</option>
									<option value="children">Children's</option>
									<option value="self-improvement">Self Improvement</option>
									<option value="young-adult">Young Adult</option>
									<option value="fantasy">Fantasy</option>
									<option value="home-improvement">Home Improvement</option>
									<option value="science-fiction">Science Fiction</option>
									<option value="romance">Romance</option>
									<option value="textbooks-technical">Textbooks/Technical</option>
									<option value="religious">Religious</option>
									<option value="non-fiction">Non-Fiction</option>
									<option value="history">History</option>
									<option value="art">Art</option>
									<option value="cooking">Cooking</option>
									<option value="satire">Satire</option>
									<option value="pets-animals">Pets/Animals</option>
									<option value="automotive">Automotive</option>
								</Form.Select>
							</Form.Group>
						</Card>
					</Col>
					<Col md={5} className={"m-2 text-center"}>
						<Figure fluid="true">
							<Figure.Image
								alt={"placeholder kitten"}
								src={"http://placekitten.com/300/300"}
							/>
							<Figure.Caption className={"text-center"}><Button size="sm" variant={"outline-secondary"} >Upload</Button></Figure.Caption>
						</Figure>
						<Card>
							<FloatingLabel controlId="library-description" label="Description of your library (256 characters max)">
								<Form.Control
									as="textarea"
									placeholder="Description of your library (256 characters max)"
									style={{ height: '135px' }}
								/>
							</FloatingLabel>

						</Card>
						<Button type="submit" variant="outline-dark" className="m-4">Submit</Button>
					</Col>

				</Row>

			</div>
			</Form>
		</>
	)
}
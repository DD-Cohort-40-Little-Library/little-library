import React, {useState} from 'react'
import {Button, Col, FloatingLabel, Form, Modal, Row} from "react-bootstrap";


export function EventCreateModal(){
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return(
	<>
		<Button variant={'light'} onClick={handleShow} className={"border border-dark"}>
			Plan An Event
		</Button>
		<Modal
			show={show}
			onHide={handleClose}
			backdrop="static"
			keyboard={false}
		>
			<Form>
				<Row>
					<h3 className={"text-center"}>Plan An Event</h3>
					<Col>
				<Form.Group className={"m-3"} >

					{/*TODO Do we want a list or open input?*/}
					<Form.Label>Event Date</Form.Label>
					<Form.Control type={"input"} placeholder={"Date of event"} controlId={"eventDate"}/>
					<Form.Label className={"mt-2"}>Type of Event</Form.Label>
					<Form.Select aria-label={"event-type"}>
						<option>Select an event type</option>
						<option value={'1'}>Story Time - Children's</option>
						<option value={'2'}>Story Telling - Adult</option>
						<option value={'3'}>Reading Circle - Family</option>
						<option value={'4'}>Reading Circle - Children</option>
						<option value={'5'}>Reading Circle - Adult</option>
						<option value={'6'}>Speaker</option>
						<option value={'7'}>Other</option>
					</Form.Select>
				</Form.Group>
					</Col>
					<Col>
						{/*TODO Is there a date-time picker that we can use?*/}
						<Form.Group className={"m-3"} >
							<Form.Label>Event Start Time</Form.Label>
							<Form.Control type={"input"} placeholder={"Event start time"} controlId={"eventStart"}/>
							<Form.Label className={"mt-2"}>Event End Time</Form.Label>
							<Form.Control type={"input"} placeholder={"Event end time"} controlId={"eventEnd"}/>
						</Form.Group>
					</Col>
				</Row>
				<Form.Group className={"m-3"} controlId={"eventTitle"}>
					<Form.Label>Event Title</Form.Label>
					<Form.Control type={"input"} placeholder={"Title of your event"} />
				</Form.Group>
				<Form.Group className={"m-3"} controlId={"eventDescription.ControlTextarea"}>
					<FloatingLabel controlId="floatingTextarea" label="Describe your event (256 characters max)">
						<Form.Control
							as="textarea"
							style={{ height: '100px' }}
						/>
					</FloatingLabel>
				</Form.Group>
			</Form>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button type={'submit'} variant="light">Submit</Button>
			</Modal.Footer>
		</Modal>
	</>
	)
}
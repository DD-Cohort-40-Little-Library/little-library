import React, {useState} from 'react'
import {Button, Col, FloatingLabel, Form, Modal, Row} from "react-bootstrap";


export function EventUpdateModal(){
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return(
		<>
			<Button variant={'light'} onClick={handleShow} className={"border border-dark" } size={"sm"}>
				Update
			</Button>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Form>
					<Row id={"eventUpdateModal"}>
						<h3 className={"text-center"}>Update Your Event</h3>
						<Col>
							<Form.Group className={"m-3"} >

								{/*TODO Do we want a list or open input?*/}
								<Form.Label>Event Date</Form.Label>
								<Form.Control type={"date"} placeholder={"Date of event"} id={"eventDate"}/>
								<Form.Label className={"mt-2"}>Type of Event</Form.Label>
								<Form.Select aria-label={"event-type"}>
									<option>Select type</option>
									<option value={'1'}>Story Time - Children's</option>
									<option value={'2'}>Story Telling - Adult</option>
									<option value={'3'}>Reading Circle - Family</option>
									<option value={'4'}>Reading Circle - Children</option>
									<option value={'5'}>Reading Circle - Adult</option>
									<option value={'6'}>Speaker</option>
									<option value={'7'}>Book Swap</option>
									<option value={'8'}>Other</option>
								</Form.Select>
							</Form.Group>
						</Col>
						<Col>
							{/*TODO Is there a date-time picker that we can use?*/}
							<Form.Group className={"m-3"} >
								<Form.Label>Event Start Time</Form.Label>
								<Form.Control type={"time"} placeholder={"Event start time"} id={"eventStart"}/>
								<Form.Label className={"mt-2"}>Event End Time</Form.Label>
								<Form.Control type={"time"} placeholder={"Event end time"} id={"eventEnd"}/>
							</Form.Group>
						</Col>
					</Row>
					<Form.Group className={"m-3"} id={"eventTitle"}>
						<Form.Label>Event Title</Form.Label>
						<Form.Control type={"input"} placeholder={"Title of your event"} />
					</Form.Group>
					<Form.Group className={"m-3"} id={"eventDescription.ControlTextarea"}>
						<FloatingLabel id="floatingTextarea" label="Describe your event (256 characters max)">
							<Form.Control
								as="textarea"
								style={{ height: '100px' }}
							/>
						</FloatingLabel>
					</Form.Group>
				</Form>
				<Modal.Footer>
					<Button variant="light" onClick={handleClose}>
						Close
					</Button>
					<Button type={'submit'} variant="secondary">Update</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}
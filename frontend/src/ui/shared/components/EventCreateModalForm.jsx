import {Col, FloatingLabel, Form, Row} from "react-bootstrap"
import React from "react"
import * as Yup from 'yup'
import {httpConfig} from "../utils/http-config.js";
import {Formik} from "formik";

export const EventCreateModalForm = () => {
	const createEvent = {
		eventDate: "",
		eventDescription: "",
		eventEnd: "",
		eventStart: "",
		eventTitle: "",
		eventType: ""
	}
	const validator = Yup.object().shape({
		eventDate: Yup.date()
			.required('Please select a date'),
		eventDescription: Yup.string()
			.required('Please briefly describe the event'),
		eventEnd: Yup.time()
			.required('Please select an ending time'),
		eventStart:Yup.time()
			.required('Please select a starting time'),
		eventTitle: Yup.string()
			.required('Please provide a title'),
		eventType: Yup.string()
	})
	const submitEventCreate = (values, {resetForm, setStatus}) => {
		httpConfig.post('/apis/events', values)
			.then(reply => {
				let {message, type} = reply
				if(reply.status === 200){
					resetForm()
				}
				setStatus ({message, type})
			})
	}
	return(
		<Formik
			initialValues={createEvent}
			onSubmit={submitEventCreate}
			validationSchema={validator}
			>
			{EventCreateModalFormContent}
		</Formik>
	)
}

function EventCreateModalFormContent(props) {
	const {
		status,
		values,
		errors,
		touched,
		dirty,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit,
		handleReset
	} = props
	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Row>
					<h3 className={"text-center"}>Plan An Event</h3>
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
		</>
	)
}
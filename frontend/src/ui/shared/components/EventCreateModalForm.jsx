import {Col, FloatingLabel, Form, FormSelect, Row} from "react-bootstrap"
import React from "react"
import * as Yup from 'yup'
import {httpConfig} from "../utils/http-config.js";
import {Formik, useField} from "formik";

// const EventCheckbox = ({ children, ...props }) => {
// 	const [field, meta] = useField({ ...props, type: "checkbox" });
// 	return (
// 		<>
// 			<label className="checkbox">
// 				<input {...field} {...props} type="checkbox" />
// 				{children}
// 			</label>
// 			{meta.touched && meta.error ? (
// 				<div className="error">{meta.error}</div>
// 			) : null}
// 		</>
// 	);
// };

const EventTypeSelect = ({ label, ...props }) => {
	// useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
	// which we can spread on <input> and alse replace ErrorMessage entirely.
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<FormSelect {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className={'error'}>{meta.error}</div>
			) : null}
		</>
	);
};

const EventLibrarySelect = ({ label, ...props }) => {
	// useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
	// which we can spread on <input> and alse replace ErrorMessage entirely.
	const [field, meta] = useField(props);
	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<FormSelect {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className={'error'}>{meta.error}</div>
			) : null}
		</>
	);
};

export const EventCreateModalForm = () => {
	const createEvent = {
		libraryName: "",
		eventDate: "",
		eventDescription: "",
		eventEnd: "",
		eventStart: "",
		eventTitle: "",
		eventType: ""
	}
	const validator = Yup.object().shape({
		libraryName: Yup.string()
			.oneOf(
				[]
			.required('Choose a library for your event')
			),
		eventDate: Yup.date()
			.required('Please select a date'),
		eventDescription: Yup.string()
			.required('Please briefly describe the event'),
		eventEnd: Yup.date()
			.required('Please select an ending time'),
		eventStart:Yup.date()
			.required('Please select a starting time'),
		eventTitle: Yup.string()
			.required('Please provide a title'),
		eventType: Yup.string()
			.oneOf(
				['story-time-children','story-telling-adult','reading-circle-family','reading-circle-children','reading-circle-adult', 'speaker', 'book-swap', 'other']
			)
			.required('Event type is required')

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
							<EventTypeSelect label={"Type of Event"} name={'eventType'}>
								<option value={''}>Select an event type</option>
								<option value={'story-time-children'}>Story Time - Children</option>
								<option value={'story-telling-adult'}>Story Telling - Adult</option>
								<option value={'reading-circle-family'}>Reading Circle - Family</option>
								<option value={'reading-circle-children'}>Reading Circle - Children</option>
								<option value={'reading-circle-adult'}>Reading Circle - Adult</option>
								<option value={'speaker'}>Speaker</option>
								<option value={'book-swap'}>Book Swap</option>
								<option value={'other'}>Other</option>
							</EventTypeSelect>
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
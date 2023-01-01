import {Button, Col, Container, FloatingLabel, Form, FormControl, FormSelect, InputGroup, Row} from "react-bootstrap"
import React from "react"
import * as Yup from 'yup'
import {httpConfig} from "../utils/http-config.js";
import {Field, Formik, useField} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllLibraries} from "../../../store/libraries.js";
import {DisplayStatus} from "./display-status/DisplayStatus";
import eventImageBlk1 from "../../../../images/uiSharedImages/eventImgBlk1.jpg";
import {Link} from "react-router-dom";
import eventImageBlk2 from "../../../../images/uiSharedImages/eventImgBlk2.jpg";

const EventTypeSelect = ({ label, ...props }) => {
	// useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
	// which we can spread on <input> and else replace ErrorMessage entirely.
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

export const EventCreatePage = () => {
	const createEvent = {
		eventLibraryId: "",
		eventDate: "",
		eventDescription: "",
		eventEndTime: "",
		eventStartTime: "",
		eventTitle: "",
		eventType: ""
	}
	const dispatch = useDispatch()
	const effects = () => {
		dispatch(fetchAllLibraries())
	}
	React.useEffect(effects, [dispatch])
	const libraryIds = useSelector(state => {
			let libraryWithEvent = []
			for(let i=0; i<=state.libraries.length; i++){
				if(state.libraries[i]?.libraryEventOptIn === true){
				libraryWithEvent.push(state.libraries[i].libraryId)
				}
			}

			return libraryWithEvent
	})

	const validator = Yup.object().shape({
		eventLibraryId: Yup.string()
			.oneOf(
				libraryIds
			)
			.required('Choose a library for your event'),
		eventDate: Yup.date()
			.required('Please select a date'),
		eventDescription: Yup.string()
			.required('Please briefly describe the event'),
		eventEndTime: Yup.mixed()
			.required('Please select an ending time'),
		eventStartTime:Yup.mixed()
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
		// Concatenate date and time so event can be submitted; ISO8601 format
		values.eventStart = `${values.eventDate}T${values.eventStartTime}:00Z`
		values.eventEnd = `${values.eventDate}T${values.eventEndTime}:00Z`

		httpConfig.post('/apis/event/', values)
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
		const libraries = useSelector(state => {
		let libraryWithEvent = []
		for(let i=0; i<=state.libraries.length; i++){
			if(state.libraries[i]?.libraryEventOptIn === true){
				libraryWithEvent.push(state.libraries[i])
			}
		}
		return libraryWithEvent
	})

	return (
		<>
			<Container className={"m-0"} fluid="auto" id={"homeSectionBlk1"}>
				<Row className={"m-0"}>
					<img src={eventImageBlk1} alt={"eventImage1"} id={"sectionImageBlk"} className={"img-fluid"}/>
				</Row>
			</Container>
			<Container className="mt-3">
			<Form onSubmit={handleSubmit}>
				<Row>
					<div className={"mx-0 text-center "}>
						<h1 className={"text-center"}>Plan An Event</h1>
						<select  name={'eventLibraryId'} onChange={handleChange} onBlur={handleBlur} >
							<option value={''}>Select a library for your event</option>
							{libraries.map((library,index) => <option key={index} value={library.libraryId}>{library.libraryName}: located at {library.libraryAddress}</option>)}
						</select>
					</div>
					<Col>
						<Form.Group controlId={'eventDate'} className={"m-3"} >
							<Form.Label>Event Date</Form.Label>
							<InputGroup className={"mb-2"}>
								<FormControl
									name={'eventDate'}
									type={'date'}
									value={values.eventDate}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</InputGroup>

							<EventTypeSelect label={"Type of Event"} name={'eventType'} className={"mt-2"}>
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
						<Form.Group className={"m-3"} >
							<Form.Label>Event Start Time</Form.Label>
								<InputGroup>
									<Form.Control
										name="eventStartTime"
										type={"time"}
										placeholder={"Event start time"}
										id={"eventStartTime"}
										value={values.eventStartTime}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</InputGroup>

							<Form.Label className={"mt-2"}>Event End Time</Form.Label>
								<InputGroup>
									<Form.Control
										name="eventEndTime"
										type={"time"}
										placeholder={"Event end time"}
										id={"eventEndTime"}
										value={values.eventEndTime}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</InputGroup>

						</Form.Group>
					</Col>
				</Row>
				<Form.Group className={"m-3"} id={"eventTitle"}>
					<Form.Label>Event Title </Form.Label>
						<InputGroup>
							<Field
								name="eventTitle"
								type={"input"}
								placeholder={"Title of your event"}
								style={{width: '350px'}}
							/>
						</InputGroup>
				</Form.Group>

				<Form.Group className={"m-3"} id={"eventDescription.ControlTextarea"}>
					<FloatingLabel id="floatingTextarea">
						<Field
							placeholder="Describe your event (256 characters max)"
							name="eventDescription"
							as="textarea"
							style={{
								height: '125px',
								width: '550px'
							}}
						/>
					</FloatingLabel>
				</Form.Group>

				<Form.Group className={"mt-3"}>
					<Button className={"btn btn-primary m-3"} type={"submit"}>Submit</Button>
					{" "}
					<Button className={"btn btn-danger m-3"} onClick={handleReset} disabled={!dirty || isSubmitting}>Reset</Button>
				</Form.Group>
			</Form>
			<DisplayStatus status={status}/>
			</Container>
			<Container className={"m-0"} fluid="auto" id={"eventSectionBlk2"}>
				<Row className={"m-0"}>
					<h1>Tips for Attending an Event Safe and Successfully</h1>
				</Row>
				<Row className={"align-items-center"}>
						<Col>
						<h3 className={"mb-3"}>Gathering with others can be a great tool for increasing literacy. It can also be a fantastic step to enrich young lives with an enjoyable social experience. Any additional time you make to promote literacy will be an adventure; however, be sure to do it safely.</h3>
						</Col>
						<Col>
							<p>When considering planning or attending an event with the Little Library Locator please take the following steps to protect yourselves, friends, and family: </p>
							<ul className={"text-start"}>
								<li>Don’t let minors attend alone</li>
								<li>Know the location and area where the event is held</li>
								<li>Take caution for any event that is asking for a fee to attend</li>
								<li>Consider attending yourself to increase supervision</li>
								<li>Make sure you have a communication strategy in place and check in throughout the day</li>
								<li>Know the start and end times of the event</li>
								<li>Make sure you know who the event holder is or research the event beforehand</li>

							</ul>
						</Col>
					</Row>
				<Row>
					<img src={eventImageBlk2} alt={"eventImage2"} id={"sectionImageBlk"} className={"img-fluid"}/>
				</Row>
			</Container>
		</>
	)
}
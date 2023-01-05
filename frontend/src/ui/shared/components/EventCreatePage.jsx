import {
	Button,
	Col,
	Container,
	FloatingLabel,
	Form,
	FormControl,
	FormSelect,
	InputGroup,
	Row,
	Stack
} from "react-bootstrap"
import React from "react"
import * as Yup from 'yup'
import {httpConfig} from "../utils/http-config.js";
import {Field, Formik, useField} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllLibraries} from "../../../store/libraries.js";
import {DisplayStatus} from "./display-status/DisplayStatus";
import eventImageBlk1 from "../../../../images/uiSharedImages/eventImgBlk1.jpg";
import eventImageBlk3 from "../../../../images/uiSharedImages/eventImgBlk3.jpg";
import eventImageBlk2 from "../../../../images/uiSharedImages/eventImgBlk2.jpg";
import eventReadingGroup from "../../../../images/uiSharedImages/eventReadingGrp.jpg";
import eventReadingGroup2 from "../../../../images/uiSharedImages/eventReadingGrp2.jpg";
import eventReadingGroup3 from "../../../../images/uiSharedImages/eventReadingGrp3.jpg";


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
			<Container className={"m-0"} fluid="auto" id={"eventSectionBlk1"}>
				<Row className={"m-0"}>
					<img src={eventImageBlk1} alt={"eventImage1"} id={"sectionImageBlk"} className={"img-fluid"}/>
				</Row>
			</Container>


			<Container className="mt-3">
			<Form onSubmit={handleSubmit}>
				<Row>
					<h1 className={"text-center"}>Plan An Event</h1>
						<select  name={'eventLibraryId'} onChange={handleChange} onBlur={handleBlur} >
							<option value={''}>Select a library for your event</option>
							{libraries.map((library,index) => <option key={index} value={library.libraryId}>{library.libraryName}: located at {library.libraryAddress}</option>)}
						</select>
				</Row>
				<Row>
					<Col md={4}>
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
					<Col md={4}>
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
				<div>
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
				</div>
				<div fluid="auto">
					<Form.Group className={"m-3"} id={"eventDescription.ControlTextarea"} >
						<FloatingLabel id="floatingTextarea">
							<Field
								placeholder="Describe your event (256 characters max)"
								name="eventDescription"
								as="textarea"
								style={{
									height: '225px',
									width: '320px'
								}}
							/>
						</FloatingLabel>
					</Form.Group>
				</div>

				<Form.Group className={"mt-3"} style={{textAlign: "center"}}>
					<Button className={"btn btn-primary m-4"} type={"submit"}>Submit</Button>
					{" "}
					<Button className={"btn btn-danger m-4"} onClick={handleReset} disabled={!dirty || isSubmitting}>Reset</Button>
				</Form.Group>

			</Form>
			<DisplayStatus status={status}/>
			</Container>

			<Container className={""} fluid="auto">
				<Row className={"m-0 "} id={"eventSectionBlk3"}>
					<Col md={8} style={{paddingBottom: "20px"}} className={"flex order-last order-md-first"}>
						<h1 className={""}>Tips for Hosting a Great Event</h1>
						<p style={{fontSize: "x-large"}}>Be a responsible host. A little pre-planning can go a long way to making sure your event is memorable and safe.</p>
						<p>Follow these tips for setting up and hosting a literacy event:</p>
						<ul className={"text-start"}>
							<li>Research the event location</li>
							<li>Give attendees plenty of notification time</li>
							<li>If snacks or food is provided, be mindful of allergy restrictions</li>
							<li>Encourage parents of minors to attend</li>
							<li>Choose a public setting if possible</li>
							<li>Provide age appropriate reading material</li>
							<li>Plan activities aimed for attendee participation</li>
						</ul>
					</Col>
					<Col md={4}  style={{paddingBottom: "20px"}} className={"flex order-first order-md-last"}>
						<img src={eventReadingGroup} alt={"eventReaderGp"} id={"sectionImageBlk"} className={"img-fluid"}/>
					</Col>
				</Row>
			</Container>

			<Container className={"m-0"} fluid="auto" id={"eventSectionBlk5"}>
				<Row className={"m-0"}>
					<img src={eventImageBlk3} alt={"eventImage5"} id={"sectionImageBlk"} className={"img-fluid"}/>
				</Row>
			</Container>


			<Container className={""} fluid="auto">
				<Row className={"m-0"} id={"eventSectionBlk4"}>
					<Col  md={4} style={{paddingBottom: "20px"}}>
						<img src={eventReadingGroup3} alt={"eventReadingGroup3"} id={"sectionImageBlk"} className={"img-fluid"}/>
					</Col>
					<Col className={"md-6"}>
						<h1 className={""}>Why Plan an Event?</h1>
						<h3>Literacy Events Come in All Shapes and Sizes.</h3>
						<ul className={"text-start"}>
							<li>Is the bibliophile in your life having a birthday?</li>
							<li>Thinking of starting a book club?</li>
							<li>Hosting a book fair?</li>
						</ul>
						<p>Planned an event and looking for ways to increase participation? There is great information about the subject. </p>
						<p>Check out these sites to learn more.</p>
					<Stack gap={2}>
							<a target="blank" href={"https://clifonline.org/resources/literacy-activities/"}>ClifOnline.org: Literacy Activities</a>
							<a target="blank" href={"https://www.readingrockets.org/article/all-kinds-readers-guide-creating-inclusive-literacy-celebrations-kids-learning-and-attention"}>ReadingRockets.org: All Kinds of Readers: A Guide to Creating Inclusive Literacy Celebrations for Kids with Learning and Attention Issues</a>
							<a target="blank" href={"https://choiceliteracy.com/article/creative-literacy-events-for-families/"}>ChoiceLiteracy.com: Creative Literacy Events for Families</a>
					</Stack>
					</Col>
				</Row>
			</Container>

			<Container className={""} fluid="auto">
				<Row className={"m-0"} id={"eventSectionBlk6"}>
					<Col md={8} style={{paddingBottom: "20px"}} className={"flex order-last order-md-first"}>
						<h1 className={""}>Start a Book Club</h1>
						<p>A simple and effective way to stay social post pandemic is to start or join a book club. One benefit of functioning during a world-wide pandemic was that many became comfortable navigating online meeting software.</p>
						<p> As many readers look for ways to connect with like-minded individuals either in person or remotely there are options. It is a great way to educate yourself on numerous topics and meet new and exciting people</p>
						<p>Learn more by researching the topic here.</p>
						<Stack gap={2}>
							<a target="blank" href={"https://www.penguinrandomhouse.com/book-clubs/getting-started/"}>PenguinRandomHouse.com: Getting Started: How to Start a Book Club</a>
							<a target="blank" href={"https://bookriot.com/how-to-start-a-book-club/"}>BookRiot.com: How to Start a Book Club that Doesn't Suck</a>
							<a target="blank" href={"https://www.oprahdaily.com/entertainment/a27569720/how-to-start-a-book-club/"}>OprahDaily.com: How to Start a Book Club in 6 Simple Steps</a>
						</Stack>
					</Col>
					<Col md={4}  style={{paddingBottom: "20px"}} className={"flex order-first order-md-last"}>
						<img src={eventReadingGroup2} alt={"eventReadingGroup2"} id={"sectionImageBlk"} className={"img-fluid"}/>
					</Col>
				</Row>
			</Container>

			<Container className={"m-0"} fluid="auto" id={"eventSectionBlk2"}>
				<Row className={"m-0"}>
					<h3>Be Sure to Attend an Event Safe and Successfully</h3>
				</Row>
				<Row className={"align-items-center"}>
						<Col md={4} style={{paddingBottom: "20px"}}>
						<p style={{fontSize: "larger"}} className={"mb-3"}>Gathering with others can be a great tool for increasing literacy. It can also be a fantastic step to enrich young lives with an enjoyable social experience. Any additional time you make to promote literacy will be an adventure; however, be sure to do it safely.</p>
						</Col>
						<Col md={4} style={{paddingBottom: "20px"}}>
							<p>When considering planning or attending an event with the Little Library Locator please take the following steps to protect yourselves, friends, and family: </p>
							<ul className={"text-start"}>
								<li>Don’t let minors attend alone</li>
								<li>Know the location and area where the event is held</li>
								<li>Take caution for any event that is asking for a fee to attend</li>
								<li>Consider attending yourself to increase supervision</li>
								<li>Make sure you have a communication strategy in place and check in throughout the day</li>
								<li>Know the start and end times of the event</li>
								<li>Make sure you know who the event holder is or research the event beforehand</li>
								<li>Report suspicious activity to authorities immediately</li>

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
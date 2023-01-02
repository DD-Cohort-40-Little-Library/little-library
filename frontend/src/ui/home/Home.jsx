import React, {useEffect} from "react"
import {Button, Col, Container, Row, Stack} from "react-bootstrap";
import {LibraryMap} from "./LibraryMap.jsx";
import {EventShortListing} from "./EventShortListing.jsx";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllEvents} from "../../store/events.js";
import {fetchAllLibraries} from "../../store/libraries.js";
import {SignOutComponent} from "../shared/components/main-nav/SignOut.jsx";
import {SignInSignUpModal} from "../shared/components/main-nav/sign-in/SignInSignUpModal.jsx";
import LLLLabelBrown from "../../../images/logoAssetsSVG/lLabel-brown.svg";
import homeImageBlk1 from "../../../images/uiSharedImages/homeImgBlk1.jpg";
import homeImageBlk2 from "../../../images/uiSharedImages/homeImgBlk2.jpg";
import llStock1 from "../../../images/uiSharedImages/homeLLStock1.jpg";
import homeImagePins from "../../../images/uiSharedImages/homeImagePins.jpg";
import lllLogoTag2 from "../../../images/uiSharedImages/mainlllLogoTag.jpg";
import homeImageBlk4 from "../../../images/uiSharedImages/homeImgBlk4.jpg";


export function Home() {

	const events = useSelector(state => state.events ? state.events : [])

	const libraries = useSelector(state => state.libraries ?? [])
	const dispatch = useDispatch()
	const effects = () => {
		dispatch(fetchAllEvents())
		dispatch(fetchAllLibraries())

	}
	useEffect(effects, [dispatch])

	return (
		<>

			<Row className={"mx-0"}>
				<img src={LLLLabelBrown} alt={"logoBrow"} id={"LLLLabelBrown"} className={"llLogoBrown"}/>
			</Row>

				<Row className={"mx-0"}>
					<Col id={"events-column"} className={"flex order-last order-md-first"} md={2}>
						<h2 id={"headLineONE"}>Upcoming Events</h2>
						<Stack gap={3}>
							{libraries.length && events.slice(0,3).map(event => <EventShortListing library={libraries.filter(library => library.libraryId === event.eventLibraryId)[0]} event={event} key={event.eventId}/>)}
						</Stack>
					</Col>

					<Col className={"flex order-md-1"} md={8}>
						<LibraryMap libraries={libraries}/>
					</Col>

					<Col id={"signInUp-column"} className={"flex order-first order-md-last"} md={1}>
						<Stack gap={3}>
							<SignInSignUpModal id={"signInSignUpModal"}/>
							<SignOutComponent/>
						</Stack>
					</Col>
				</Row>

			<Container className={""} fluid="auto">
			<Row className={"m-0 "} id={"homeSectionBlk4"}>
				<Col>
					<img src={homeImagePins} alt={"homeImagePins"} id={"sectionImageBlk"} className={""} style={{width: '40rem'}}/>
				</Col>
				<Col>
					<h1 className={""}>What are Specializations?</h1>
						<p style={{fontSize: "x-large"}}>Got a lot of children’s books at your Little Library? How about a great collect of romance novels you want to share? The Little Library Locator Map is enabled to highlight the book genre abundance that may be at a location at any time.</p>
						<p>The following genres are selectable when creating or updating a library:</p>
					<Row>
						<Col>
							<ul className={"text-start"}>
								<li>Animals or Pets </li>
								<li>Art</li>
								<li>Automotive</li>
								<li>Baby</li>
								<li>Children</li>
								<li>Cooking</li>
								<li>Fantasy</li>
								<li>Fiction</li>
								<li>Finance</li>
								<li>Fitness</li>
								<li>History </li>
							</ul>
						</Col>
						<Col>
							<ul className={"text-start"}>
								<li>Home Improvement</li>
								<li>Horror</li>
								<li>Nature</li>
								<li>Religious</li>
								<li>Romance</li>
								<li>Satire</li>
								<li>Self-Improvement</li>
								<li>Space</li>
								<li>Technical or Textbooks</li>
								<li>Young Adult</li>
							</ul>
						</Col>
					</Row>
				</Col>
			</Row>
			</Container>



			<Container className={"m-0"} fluid="auto" id={"homeSectionBlk1"}>
				<Row className={"m-0"}>
					<img src={homeImageBlk1} alt={"homeImage1"} id={"sectionImageBlk"} className={"img-fluid"}/>
				</Row>
			</Container>

			<Container className={""} fluid="auto">
				<Row className={"m-0 "} id={"homeSectionBlk2"}>
					<Col>
						<img src={llStock1} alt={"llStock1"} id={"sectionImageBlk"} className={""} style={{width: '20rem'}}/>
					</Col>
					<Col>
						<h1 className={""}>Our Mission</h1>
						<p>“Our Mission is to foster a social environment around literacy. Through the Little Library Locator, we aim to promote different interests around reading and highlight the unique personalities of the creators of Little Libraries around the world.”</p>

						<h2>Join the project.</h2>
						<p style={{fontSize: "large"}}>Sign Up and Register Your Little Library</p>
						<Link to='/library-create'><Button>Add A Library</Button></Link>
					</Col>
				</Row>
			</Container>

			<Container className={"m-0"} fluid="auto" id={"homeSectionBlk6"}>
				<Row className={"m-0"}>
					<img src={homeImageBlk4} alt={"homeImage4"} id={"sectionImageBlk"} className={"img-fluid"}/>
				</Row>
			</Container>

			<Container className={""} fluid="auto">
				<Row className={"m-0 "} id={"homeSectionBlk5"}>
					<Col>
						<h1 className={""}>Who We Are</h1>
						<p>Four people from different worlds came together and built this site. A couple with some coding exposure and the others with none. Within ten weeks of intense coding experience, we became a great team. Together, we have created a great application had a fantastic time doing it!</p>
						<h3>Meet the Team</h3>
						<Link to='/about-us'><Button>About Us</Button></Link>
					</Col>
					<Col>
						<img src={lllLogoTag2} alt={"lllLogoTag"} id={"sectionImageBlk"} className={""} style={{width: '30rem'}}/>
					</Col>
				</Row>
			</Container>


			<Container className={"m-0"} fluid="auto" id={"homeSectionBlk3"}>
				<Row className={"m-0"}>
					<h1>When is Your Next Event?</h1>
					<p style={{fontSize: "large"}} className={"mb-3"}>LogIn and Get Started!</p>
					<Link to='/event-create-page'><Button className={"mb-3"}>Plan An Event</Button></Link>
					<img src={homeImageBlk2} alt={"homeImage2"} id={"sectionImageBlk"} className={"img-fluid"}/>
				</Row>
			</Container>


		</>

	)}
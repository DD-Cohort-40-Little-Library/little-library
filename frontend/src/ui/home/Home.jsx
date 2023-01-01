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
							{/*<Link to='/profile-landing'><Button>Your Profile</Button></Link>*/}
							<SignOutComponent/>
							{/*<Link to='/event-create-page'><Button>Plan An Event</Button></Link>*/}
							{/*<Link to='/library-create'><Button>Add A Library</Button></Link>*/}
							{/*<Link to='/about-us'><Button>About Us</Button></Link>*/}
						</Stack>
					</Col>
				</Row>
			<Container className={"m-0"} fluid="auto" id={"homeSectionBlk1"}>
				<Row className={"m-0"}>
					<img src={homeImageBlk1} alt={"homeImage1"} id={"homeSectionBlkImg"} className={"img-fluid"}/>
				</Row>
			</Container>
			<Container className={""} fluid="auto">
				<Row className={"m-0 "} id={"homeSectionBlk2"}>
					<Col>
						<img src={llStock1} alt={"llStock1"} id={"homeSectionBlkImg"} className={""} style={{width: '20rem'}}/>
					</Col>
					<Col>
						<h1 className={""}>Our Mission</h1>
						<p>“Our Mission is to foster a social environment around literacy. Through the Little Library Locator, we aim to promote different interests around reading and highlight the unique personalities of the creators of Little Libraries around the world.” </p>
					</Col>
				</Row>
			</Container>
			<Container className={"m-0"} fluid="auto" id={"homeSectionBlk3"}>
				<Row className={"m-0"}>
					<img src={homeImageBlk2} alt={"homeImage2"} id={"homeSectionBlkImg"} className={"img-fluid"}/>
				</Row>
			</Container>
		</>

	)}
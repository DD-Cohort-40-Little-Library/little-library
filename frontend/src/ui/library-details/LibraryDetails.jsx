import React from "react";
import Card from 'react-bootstrap/Card';
import {Button, Col, Container, Image, Row, Stack, Tab, Tabs} from "react-bootstrap";
import {EventListing} from "../shared/components/EventListing.jsx";
import {CheckInDisplay} from "../shared/components/CheckInDisplay.jsx";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {CheckInModal} from "./CheckInModal";
import {CheckInDetailBlockLibrary} from "./CheckInDetailBlockLibrary";
import {CheckInDetailBlockProfile} from "../profile-landing/CheckInDetailBlockProfile.jsx";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fetchAuth} from "../../store/auth.js";
import {fetchLibrariesByProfileId, fetchLibraryByLibraryId} from "../../store/libraries.js";
import {fetchEventsByLibraryId, fetchEventsByProfileId} from "../../store/events.js";
import {fetchAllCheckInsForProfileTab, fetchCheckInsByProfileId} from "../../store/checkIn.js";
import {fetchCurrentUser} from "../../store/currentUser.js";
import {fetchCheckInsByLibraryId} from "../../store/checkIn.js"
import {EventDetailBlockLibrary} from "./EventDetailBlockLibrary.jsx";
import libDisImageBlk1 from "../../../images/uiSharedImages/libDisImgBlk1.jpg";
import libDisImageBlk5 from "../../../images/uiSharedImages/libDisImgBlk2.jpg";
import libDisImageBlk3 from "../../../images/uiSharedImages/libDisImgBlk4.jpg";
import libDisSuper from "../../../images/uiSharedImages/libDisSuper.jpg";


export function LibraryDetails() {

    let { libraryId } = useParams()
    const dispatch = useDispatch()
    const checkins = useSelector(state => state.checkIns ? state.checkIns : [])
    const events = useSelector(state => state.events ? state.events : [])
    const library = useSelector(state => state.libraries ? state.libraries : {})
    // const library = useSelector(state => {return state.libraries ? state.libraries
    //     .filter(library => library.libraryId === libraryId)[0]
    //     : null})
    // const specialization = () => {
    //     if(library.librarySpecialization === null){
    //         return ""
    //     } else {
    //         return library.librarySpecialization
    //     }
    // }
    const {checkInComment,checkInDate, checkInPhotoUrl, checkInLibraryId} = checkins
    // const {eventDate, eventDescription, eventName} = events

    const initialEffects = () => {
        dispatch(fetchLibraryByLibraryId(libraryId))
        // dispatch(fetchEventsByLibraryId())
        dispatch(fetchCheckInsByLibraryId(checkInLibraryId))
    }
    React.useEffect(initialEffects, [libraryId, checkInLibraryId, dispatch])

console.log("is this thing on")

    return (
        <>
        <Container className={"m-0"} fluid="auto" id={"libDisSectionBlk1"}>
            <Row className={"m-0"}>
                <img src={libDisImageBlk1} alt={"libDisImageBlk1"} id={"sectionImageBlk"} className={"img-fluid"}/>
            </Row>
        </Container>


        <div id={"librarySectionDisplay"}>
        <Card className={""} id={"libraryCardDisplay"} >
            <Card.Header><h2>{library.libraryAddress}, {library.libraryType}</h2></Card.Header>
            <Card.Body>
                {/*Make backend library image connection, code freeze*/}
                <Image src={library.libraryImageURL} fluid={true} alt={'Please upload a photo of your Little Library.'} ></Image>
                <Card.Title><h3>{library.libraryName}</h3></Card.Title>
                    {/*<h5>{specialization}</h5>*/}
                <Card.Text>{library.libraryDescription}</Card.Text>
                <Row>
                <Col style={{padding: '1rem'}}>
                    <CheckInModal/>
                </Col>
                </Row>
            </Card.Body>
        </Card>

        <Tabs
            defaultActiveKey="profile"
            id="library-details-tabs"
            className="mb-3"
            style={{fontSize: "xx-large"}}
        >
            {/* complete tabs, halted due to freeze */}
            <Tab eventKey="events" title="Events">
                <Container>
                    <Row>
                        <h3>TEST - EVENT LISTING - 1</h3>
                        {console.log(events)}
                        {events.map(event => <EventDetailBlockLibrary event={event}/>)}
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="check-ins" title="Check-Ins">
                <Container>
                    <Row>
                        <h3>TEST - CHECKIN DISPLAY - 1</h3>
                        {checkins.map (checkin => <CheckInDetailBlockLibrary checkin={checkin}/>)}
                    </Row>
                </Container>
            </Tab>
        </Tabs>
        </div>

        <Container className={""} fluid="auto">
            <Row className={"m-0 "} id={"libDisSectionBlk2"}>
                <Col>
                    <h1 className={""}>Can Reading Give You Super Powers?</h1>
                    <p>Empathy, stress relief, and life longevity are just a few things that reading regularly has been credited to do. The benefits of reading have well been documented that it is said that superpowers are gained. Decide for yourself by exploring these articles on the subject.</p>

                    <Stack gap={1}>
                        <a target="_blank" href={"https://medium.com/@educasic/5-superpowers-you-get-from-reading-c7c35756ac9d"}>Medium.com: 5 superpowers you get from reading</a>
                        <a target="_blank" href={"https://baos.pub/7-superpowers-that-books-can-grant-you-7cd76279a1a1"}>Baos.pub: 7 Superpowers That Books Can Grant You</a>
                        <a target="_blank" href={"https://www.healthline.com/health/benefits-of-reading-books"}>Healthline.com: Benefits of Reading Books: How It Can Positively Affect Your Life</a>
                        <a target="_blank" href={"https://www.realsimple.com/health/preventative-health/benefits-of-reading-real-books"}>RealSimple.com: 8 Science-Backed Reasons to Read a (Real) Book</a>
                        <a target="_blank" href={"https://www.webmd.com/balance/health-benefits-of-reading-books"}>WebMD.com: Health Benefits of Reading Books</a>
                    </Stack>

                </Col>
                <Col>
                    <img src={libDisSuper} alt={"libDisSuper"} id={"sectionImageBlk"} className={""} style={{width: '30rem'}}/>
                </Col>
            </Row>
        </Container>

        <Container className={"m-0"} fluid="auto" id={"libDisSectionBlk3"}>
            <Row className={"m-0"}>
                <img src={libDisImageBlk3} alt={"libDisImageBlk3"} id={"sectionImageBlk"} className={"img-fluid"}/>
            </Row>
        </Container>

        <Container className={"m-0"} fluid="auto" id={"libDisSectionBlk5"}>
            <Row className={"m-0"}>
                <img src={libDisImageBlk5} alt={"libDisImageBlk5"} id={"sectionImageBlk"} className={"img-fluid"}/>
            </Row>
        </Container>
        </>
    )
    }



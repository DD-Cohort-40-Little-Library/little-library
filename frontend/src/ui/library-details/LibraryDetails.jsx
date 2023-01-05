import React, {useEffect} from "react";
import Card from 'react-bootstrap/Card';
import {Col, Container, Image, Row, Stack, Tab, Tabs} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {CheckInModal} from "./CheckInModal";
import {CheckInDetailBlockLibrary} from "./CheckInDetailBlockLibrary";
import {fetchLibraryByLibraryId} from "../../store/libraries.js";
import {fetchEventsByLibraryId} from "../../store/events.js";
import {fetchCheckInsByLibraryId} from "../../store/checkIn.js"
import {EventDetailBlockLibrary} from "./EventDetailBlockLibrary.jsx";
import libDisImageBlk1 from "../../../images/uiSharedImages/libDisImgBlk1.jpg";
import libDisImageBlk5 from "../../../images/uiSharedImages/libDisImgBlk2.jpg";
import libDisImageBlk3 from "../../../images/uiSharedImages/libDisImgBlk4.jpg";
import libDisSuper from "../../../images/uiSharedImages/libDisSuper.jpg";
import libDisFamRead from "../../../images/uiSharedImages/libDisFamRead.jpg";

export function LibraryDetails() {

    let { libraryId } = useParams()
    const checkins = useSelector(state => state.checkIns ? state.checkIns : [])
    const events = useSelector(state => state.events ? state.events : [])
    const library = useSelector(state => state.libraries ? state.libraries : [])
    const libraryImage = useSelector(state => {for (let checkIn of state.checkIns) {
        if (checkIn.checkInPhotoUrl !== "") {
            return checkIn.checkInPhotoUrl
        }
    }})

    const {checkInComment,checkInDate, checkInPhotoUrl, checkInLibraryId} = checkins
    const {eventDate, eventDescription, eventName} = events
    const dispatch = useDispatch()

    const effects = () => {
        dispatch(fetchLibraryByLibraryId(libraryId))
        dispatch(fetchEventsByLibraryId(libraryId))
        dispatch(fetchCheckInsByLibraryId(libraryId))
    }
    useEffect(effects,[libraryId, dispatch])

    const specialization = () => {
        if (specialization === "") {
            return  ""
        } else {
            return specialization
        }
    }

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
                    {libraryImage && <Image src={libraryImage} className={"pt-4 rounded-circle"} fluid="auto" alt={'Please upload a photo of your Little Library.'} ></Image>}
                    <Card.Title><h3>{library.libraryName}</h3></Card.Title>
                        <h5>{library.librarySpecialization}</h5>
                    <Card.Text>{library.libraryDescription}</Card.Text>
                    <Row>
                    <Col style={{padding: '1rem'}}>
                        <CheckInModal/>
                    </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
        <div className={"pt-3"} id={"libraryDisDetailTabsSec"}>
        <Tabs
            defaultActiveKey="profile"
            className="mb-3"
            style={{fontSize: "x-large"}}
            fluid="auto"
        >
            <Tab eventKey="events" title="Events">
                <Container md={4} id={"libraryDisEventsTab"}>
                    <Row>
                        <Stack gap={3} className={"align-items-center"}>
                            {events.map (event => <EventDetailBlockLibrary library={library} event={event} key={event.eventId}/>)}
                        </Stack>
                    </Row>
                </Container>
            </Tab>
            <Tab eventKey="check-ins" title="Check-Ins">
                <Container>
                    <Row>
                        <Stack gap={3} className={"align-items-center"}>
                            {checkins.map (checkin => <CheckInDetailBlockLibrary library={library} checkin={checkin} key={checkin.checkInId}/>)}
                        </Stack>
                    </Row>
                </Container>
            </Tab>
        </Tabs>
        </div>

        <Container className={""} fluid="auto">
            <Row className={"m-0 "} id={"libDisSectionBlk2"}>
                <Col md={7} style={{paddingBottom: "20px"}} className={"flex order-last order-md-first"}>
                    <h1 className={""}>Can Reading Give You Super Powers?</h1>
                    <p>Empathy, stress relief, and life longevity are just a few things that reading regularly has been credited to do. The benefits of reading have well been documented that it is said that superpowers are gained. Decide for yourself by exploring these articles on the subject.</p>
                    <Stack gap={1}>
                        <a target="blank" href={"https://medium.com/@educasic/5-superpowers-you-get-from-reading-c7c35756ac9d"}>Medium.com: 5 superpowers you get from reading</a>
                        <a target="blank" href={"https://baos.pub/7-superpowers-that-books-can-grant-you-7cd76279a1a1"}>Baos.pub: 7 Superpowers That Books Can Grant You</a>
                        <a target="blank" href={"https://www.healthline.com/health/benefits-of-reading-books"}>Healthline.com: Benefits of Reading Books: How It Can Positively Affect Your Life</a>
                        <a target="blank" href={"https://www.realsimple.com/health/preventative-health/benefits-of-reading-real-books"}>RealSimple.com: 8 Science-Backed Reasons to Read a (Real) Book</a>
                        <a target="blank" href={"https://www.webmd.com/balance/health-benefits-of-reading-books"}>WebMD.com: Health Benefits of Reading Books</a>
                    </Stack>
                </Col>
                <Col md={4}  style={{paddingBottom: "20px"}} className={"flex order-first order-md-last"}>
                    <img src={libDisSuper} alt={"libDisSuper"} id={"sectionImageBlk"} className={"img-fluid"}/>
                </Col>
            </Row>
        </Container>

        <Container className={"m-0"} fluid="auto" id={"libDisSectionBlk3"}>
            <Row className={"m-0"}>
                <img src={libDisImageBlk3} alt={"libDisImageBlk3"} id={"sectionImageBlk"} className={"img-fluid"}/>
            </Row>
        </Container>

        <Container className={""} fluid="auto">
            <Row className={"m-0 "} id={"libDisSectionBlk4"}>
                <Col md={5} style={{paddingBottom: "20px"}}>
                    <img src={libDisFamRead} alt={"libDisFamRead"} id={"sectionImageBlk"} className={"img-fluid"}/>
                </Col>
                <Col>
                    <h1 className={""}>Start Teaching Reading Early and Often</h1>
                    <p>We all want our children to be successful and reading to children at the early stages of development may be key. Not only will it help form a loving bond with your child, but it will also introduce your child to world and concepts that will help them develop quicker. It will teach listening and comprehension as well as expand their attention span which will be helpful when they enter school.</p>
                    <p>Check out these articles to learn more:</p>
                    <Stack gap={1}>
                        <a target="blank" href={"https://www.nationwidechildrens.org/family-resources-education/700childrens/2022/11/benefits-of-starting-reading"}>NationwideChildrens.org: Benefits of Starting Reading at a Young Age</a>
                        <a target="blank" href={"https://www.all4kids.org/news/blog/the-importance-of-reading-to-your-children/"}>All4Kids.org: The Importance of Reading to Your Children</a>
                        <a target="blank" href={"https://www.waterford.org/education/how-young-is-too-young-to-read/"}>Waterford.org: How Young Is Too Young to Learn to Read?</a>
                        <a target="blank" href={"https://www.ybrecdc.org/child-care-minnetonka/benefits-at-learning-to-read-at-an-early-age/"}>Ybrecdc.org: Benefits Of Learning To Read At An Early Age</a>
                        <a target="blank" href={"https://www.healthline.com/health/childrens-health/reading-to-children"}>Healthline.com: Reading to Children: Why It’s So Important and How to Start</a>
                    </Stack>
                </Col>
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


